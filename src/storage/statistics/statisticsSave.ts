import AsyncStorage from '@react-native-async-storage/async-storage';

import { STATISTICS_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from '../meal/MealStorageDTO';
import { StatisticsStorageDTO } from './StatisticsStorageDTO';

export async function statisticsSave (meals: MealStorageDTO[]) {  
  try {    
    let bestSequence = 0;
    let mealsOnTheDiet = 0;
    let mealsOffTheDiet = 0;
    let percentOnTheDiet = 0;

    if (meals.length) {
      let currentSequence = 0;
      for (const meal of meals) {        
        if (meal.onTheDiet) {
          mealsOnTheDiet += 1;
          currentSequence += 1;
          if (currentSequence > bestSequence) bestSequence = currentSequence;
        } else {
          mealsOffTheDiet += 1;
          currentSequence = 0;
        }
      }
      percentOnTheDiet = (mealsOnTheDiet / meals.length) * 100;
    }

    const statistics: StatisticsStorageDTO = {
      meals: meals.length,
      bestSequence,
      mealsOffTheDiet,
      mealsOnTheDiet,
      percentOnTheDiet
    };
    
    const storage = JSON.stringify(statistics);
    await AsyncStorage.setItem(STATISTICS_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}