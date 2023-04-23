import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { mealsGetAll } from './mealsGetAll';
import { statisticsSave } from '@storage/statistics/statisticsSave';

export async function mealDelete (mealId: string) {
  try {    
    let storedMeals = await mealsGetAll();
    storedMeals = storedMeals.filter(m => m.id !== mealId);
    const storage = JSON.stringify(storedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    await statisticsSave(storedMeals);
  } catch (error) {
    throw error;
  }
}