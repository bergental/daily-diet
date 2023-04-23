import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Crypto from 'expo-crypto';

import { AppError } from '@utils/AppError';

import { MEAL_COLLECTION } from '@storage/storageConfig';

import { mealsGetAll } from './mealsGetAll';
import { MealStorageDTO } from './MealStorageDTO';
import { statisticsSave } from '@storage/statistics/statisticsSave';

export async function mealSave (meal: MealStorageDTO) {
  try {
    if (!meal.id) meal.id = Crypto.randomUUID();
    let storedMeals = await mealsGetAll();
    let storedMeal = storedMeals.find(m => m.date === meal.date);
    if (storedMeal && storedMeal.id !== meal.id)
        throw new AppError('Já existe uma refeição cadastrada nesse horário.');
    
    storedMeal = storedMeals.find(m => m.id! === meal.id!);
    if (storedMeal) {
      storedMeal.date = meal.date;
      storedMeal.name = meal.name;
      storedMeal.description = meal.description;
      storedMeal.onTheDiet = meal.onTheDiet;
    } else {
      storedMeal = meal;
      storedMeals.push(storedMeal);
    }
    storedMeals.sort((a, b) => b.date - a.date);

    const storage = JSON.stringify(storedMeals);
    await AsyncStorage.setItem(MEAL_COLLECTION, storage);

    await statisticsSave(storedMeals);
    return storedMeal;
  } catch (error) {
    throw error;
  }
}