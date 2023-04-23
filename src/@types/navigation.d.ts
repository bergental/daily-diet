import { MealStorageDTO } from '@storage/meal/MealStorageDTO';

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      statistics: undefined;
      meal: {
        mealId?: string,
        backTo?: 'mealDetail' | 'home'
      };
      mealDetail: {
        mealId: string
      };
      feedback: {
        mealId: string,
        onTheDiet: boolean,
        backTo?: 'mealDetail' | 'home'
      };
    }
  }
}