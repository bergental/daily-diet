import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Input } from '@components/Input';
import { RadioButton } from '@components/RadioButton';

import { 
    Container, 
    Content,
    FieldGroup,
    FieldRow,
    FieldItem,
    MealTypeStyleProps
 } from './styles';
import { Button } from '@components/Button';
import { Loading } from '@components/Loading';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { parseDateWithoutTime, parseHourMinute, strToDate } from '@utils/DateParse';
import { mealGetById } from '@storage/meal/mealGetById';
import { mealSave } from '@storage/meal/mealSave';

 type Props = {
  type?: MealTypeStyleProps;
 }

 type RouteParams = {
  mealId?: string;
  backTo?: 'mealDetail' | 'home';
 }

export function Meal({ type = 'INFO' }: Props) {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId, backTo } = route.params as RouteParams;

  const title = mealId ? "Editar refeição" : "Nova refeição";

  const currentDate = new Date();
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<MealStorageDTO>();

  const [date, setDate] = useState(meal ? parseDateWithoutTime(new Date(meal.date)) : parseDateWithoutTime(currentDate));
  const [time, setTime] = useState(meal ? parseHourMinute(new Date(meal.date)) : parseHourMinute(currentDate));
  const [name, setName] = useState(meal ? meal.name : '');
  const [description, setDescription] = useState<string>(meal ? meal.description : '');
  const [dietStatus, setDietStatus] = useState<string>();

  async function fetchMeal() {
    try {
      setIsLoading(true);
      if (mealId) {
        const data = await mealGetById(mealId);
        if (data) {
          setDate(parseDateWithoutTime(new Date(data.date)));
          setTime(parseHourMinute(new Date(data.date)));
          setName(data.name);
          setDescription(data.description);
          setDietStatus(data.onTheDiet ? 'Y' : 'N');
        }
        setMeal(data);
      }
    } catch (error) {
      Alert.alert('Editar Refeição', 'Não foi possível carregar a refeição selecionada.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleDateChangeText(text: string) {
    if (text.length < 11 && text.replace(/[0-9]/g, "").replaceAll("/", "").length === 0) {
      text = text.replaceAll("/", "");
      const day = text.substring(0, 2);
      const month = text.substring(2, 4);
      const year = text.substring(4);

      
      let dateFormatted = '';
      const isInvalid = (day && day.length === 1 && parseInt(day) > 3) ||
                        (day && (parseInt(day) === 0 || parseInt(day) > 31)) ||
                        (month && month.length === 1 && parseInt(month) > 1) ||
                        (month && (parseInt(day) === 0 || parseInt(month) > 12)) ||
                        (month && parseInt(month) === 2 && parseInt(day) > 29);
      if (!isInvalid) {
        if (day) dateFormatted = day; 
        if (month) dateFormatted += '/'+month;
        if (year) dateFormatted += '/'+year;

        setDate(dateFormatted);
      }
    }
  };

  function handleTimeChangeText(text: string) {
    
    if (text.length < 11 && text.replace(/[0-9]/g, "").replaceAll(":", "").length === 0) {
      text = text.replaceAll(":", "");
      const hour = text.substring(0, 2);
      const minute = text.substring(2, 4);

      let timeFormatted = '';
      const isInvalid = (hour && parseInt(hour) > 23) || (minute && parseInt(minute) > 59);
      if (!isInvalid) {
        if (hour) timeFormatted = hour;
        if (minute) timeFormatted += ':'+minute;

        setTime(timeFormatted);
      }
    }
  };

  
  function handleFeedback(meal: MealStorageDTO) {
    navigation.navigate('feedback', { mealId: meal.id!, onTheDiet: meal.onTheDiet, backTo });
  }
  
  async function handleSave() {
    try {
      if (name && description && date && time && dietStatus) {
        const meal: MealStorageDTO = {
          id: mealId,
          date: strToDate(date, time).getTime(),
          description,
          name,
          onTheDiet: dietStatus === 'Y'
        };
  
        const storedMeal = await mealSave(meal);
        
        handleFeedback(storedMeal);
      } 
    } catch (error) {
      Alert.alert(title, 'Não foi possível carregar a refeição selecionada.');
    }
  }

  useFocusEffect(useCallback(() => { 
    fetchMeal(); 
  }, []));

  return (
    <Container type={type}>
      <Header 
        title={title}
        backTo={backTo}
      />
        <Content>
          {
            isLoading ?
              <Loading /> :
              ((meal || mealId === undefined)  &&
                <>
                  <FieldGroup
                    style={{
                      gap: 24
                    }}
                  >
                    <Input
                      label="Nome"
                      value={name}
                      onChangeText={setName}
                    />

                    <Input
                      label="Descrição"
                      value={description}
                      onChangeText={setDescription}
                      multiline
                      textAlignVertical={'top'}
                      numberOfLines={4}
                    />

                    <FieldRow
                      style={{
                        gap: 24
                      }}
                    >
                      <FieldItem>
                        <Input
                          label="Data"
                          inputMode="numeric"
                          value={date}
                          onChangeText={handleDateChangeText}
                        />
                      </FieldItem>

                      <FieldItem>
                        <Input
                          label="Hora"
                          inputMode="numeric"
                          value={time}
                          onChangeText={handleTimeChangeText}
                        />
                      </FieldItem>
                    </FieldRow>
                    <RadioButton 
                      label="Está dentro da dieta?"
                      initialValue={dietStatus}
                      onSelectedItem={setDietStatus}
                    />
                  </FieldGroup>
                  <Button 
                    title={meal ? "Salvar alterações" : "Cadastrar refeição"}
                    onPress={handleSave}
                  />
                </>
              )
          }
        </Content>
    </Container>
  );
}