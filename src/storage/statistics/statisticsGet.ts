import AsyncStorage from '@react-native-async-storage/async-storage';

import { STATISTICS_COLLECTION } from '@storage/storageConfig';

import { StatisticsStorageDTO } from './StatisticsStorageDTO';

export async function statisticsGet() {
  try {
    const storage = await AsyncStorage.getItem(STATISTICS_COLLECTION);
    const statistics: StatisticsStorageDTO = storage != null ? JSON.parse(storage) : {
      meals: 0,
      bestSequence: 0,
      mealsOffTheDiet: 0,
      mealsOnTheDiet: 0,
      percentOnTheDiet: 0
    };
    return statistics;
  } catch(error) {
    throw error;
  }
}