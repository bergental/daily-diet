import AsyncStorage from '@react-native-async-storage/async-storage';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { MealStorageDTO } from './MealStorageDTO';

export async function mealGetById(id: string) {
  try {
    const storage = await AsyncStorage.getItem(`${MEAL_COLLECTION}`);
    const meals: MealStorageDTO[] = storage != null ? JSON.parse(storage) : [];
    const meal = meals.find(item => item.id === id)
    return meal;
  } catch(error) {
    throw error;
  }
}