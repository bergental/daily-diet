import { useState, useCallback } from 'react';
import { SectionList, Alert } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { ButtonStatistics } from '@components/ButtonStatistics';
import { Button } from '@components/Button';
import { MealCard } from '@components/MealCard';
import { parseHourMinute } from '@utils/DateParse';

import { 
  Container, 
  ContainerHeader, 
  Logo, 
  ProfilePicture, 
  ContainerMeals, 
  Title,
  MealListGroup
} from './styles';

import logoImg from '@assets/logo.png';
import profileImg from '@assets/profile.png';
import { ListEmpty } from '@components/ListEmpty';
import { MealListDTO, MealStorageDTO } from '@storage/meal/MealStorageDTO';
import { mealsGetAllToLList } from '@storage/meal/mealsGetAllToList';
import { Loading } from '@components/Loading';
import { StatisticsStorageDTO } from '@storage/statistics/StatisticsStorageDTO';
import { statisticsGet } from '@storage/statistics/statisticsGet';
import { MEAL_COLLECTION } from '@storage/storageConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [meals, setMeals] = useState<MealListDTO[]>([]);
  const [statistics, setStatistics] = useState<StatisticsStorageDTO>();

  async function fetchMeals() {
    try {
      // await AsyncStorage.removeItem(MEAL_COLLECTION);
      setIsLoading(true);
      const data = await mealsGetAllToLList();
      setMeals(data);
    } catch (error) {
      Alert.alert('Refeições', 'Não foi possível carregar as refeições.');
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchStatistics() {
    try {
      const data = await statisticsGet();
      setStatistics(data);
    } catch (error) {
      Alert.alert('Estatísticas', 'Não foi possível carregar as estatísticas das refeições.');
    }
  }

  const navigation = useNavigation();

  function handleStatistics() {
    navigation.navigate('statistics');
  }
  
  function handleNewMeal() {
    navigation.navigate('meal', {});
  }
  
  function handleMealDetail(meal: MealStorageDTO) {
    navigation.navigate('mealDetail', { mealId: meal.id! });
  }
  
  useFocusEffect(useCallback(() => { 
    fetchMeals();
    fetchStatistics();
  }, []));

  return (
    <Container>
      <ContainerHeader>
        <Logo source={logoImg} />
        <ProfilePicture 
          source={profileImg} 
          
        />
      </ContainerHeader>
      <ButtonStatistics 
        percent={statistics ? statistics.percentOnTheDiet : 0}
        subtitle="das refeições dentro da dieta"
        onPress={handleStatistics}
      />
      <ContainerMeals>
        <Title>
          Refeições
        </Title>
        <Button
          icon='Add'
          title='Nova refeição'
          style={{
            marginBottom: 12
          }}
          onPress={handleNewMeal}
        />
        {
        isLoading ?
          <Loading /> :
          <SectionList 
            sections={meals}
            keyExtractor={(item, index) => `${item.date}_${index}`}
            contentContainerStyle={meals.length == 0 && { flex: 1 }}
            renderItem={({item}) => (
              <MealCard 
                time={parseHourMinute(new Date(item.date))}
                title={item.name}
                status={item.onTheDiet ? 'Y' : 'N'}
                onPress={() => handleMealDetail(item)}
              />
            )}
            renderSectionHeader={({section: {group}}) => (
              <MealListGroup>{group}</MealListGroup>
            )}
            ListEmptyComponent={() => (
              <ListEmpty 
                message="Que tal cadastrar a primeira refeição?"
              />
            )}
            showsVerticalScrollIndicator={false}
          />
          }
      </ContainerMeals>
    </Container>
  );
}