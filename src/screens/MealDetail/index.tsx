import { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import { useRoute, useNavigation, useFocusEffect } from '@react-navigation/native';

import { Header } from '@components/Header';
import { Balloon } from '@components/Balloon';

import { 
    Container, 
    Content,
    FieldGroup,
    Name,
    Description,
    LabelDate,
    DateTime
 } from './styles';
import { Button } from '@components/Button';

import { MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealGetById } from '@storage/meal/mealGetById';
import { Loading } from '@components/Loading';
import { parseDateWithoutTime, parseHourMinute } from '@utils/DateParse';
import { mealDelete } from '@storage/meal/mealDelete';

 type RouteParams = {
  mealId: string;
 }

export function MealDetail() {
  const route = useRoute();
  const navigation = useNavigation();
  const { mealId } = route.params as RouteParams;
  
  const [isLoading, setIsLoading] = useState(true);
  const [meal, setMeal] = useState<MealStorageDTO>();
  const [type, setType] = useState<'PRIMARY' | 'SECONDARY'>('PRIMARY');

  async function fetchMeal() {
    try {
      setIsLoading(true);
      const data = await mealGetById(mealId);
      setType(data!.onTheDiet ? 'PRIMARY' : 'SECONDARY')
      setMeal(data);
    } catch (error) {
      Alert.alert('Detalhe da Refeição', 'Não foi possível carregar a refeição selecionada.');
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditMeal() {
    navigation.navigate('meal', { mealId, backTo: 'mealDetail' });
  }

  async function handleMealDelete() {
    await mealDelete(mealId);
    navigation.navigate('home');
  }
  
  useFocusEffect(useCallback(() => { 
    fetchMeal(); 
  }, []));

  return (
    <Container type={type}>
      <Header 
        title="Refeição"
      />
      <Content>
        {
          isLoading ?
            <Loading /> : 
            (meal &&
              <>
                <FieldGroup>
                  <Name>
                    { meal.name }
                  </Name>
                  <Description>
                    { meal.description }
                  </Description>
                  <LabelDate>Data e hora</LabelDate>
                  <DateTime>
                    {`${parseDateWithoutTime(new Date(meal.date))} às ${parseHourMinute(new Date(meal.date))}`}
                  </DateTime>
                  <Balloon
                    type={type}
                    text={meal.onTheDiet ? 'dentro da dieta' : 'fora da dieta'}
                  />
                </FieldGroup>
                <Button 
                  title="Editar refeição"
                  icon="Edit"
                  type="PRIMARY"
                  style={{marginBottom: 9}}
                  onPress={handleEditMeal}
                />
                <Button 
                  title="Excluir refeição"
                  icon="Delete"
                  type="SECONDARY"
                  onPress={handleMealDelete}
                />
              </>
            )
        }
      </Content>
    </Container>
  );
}