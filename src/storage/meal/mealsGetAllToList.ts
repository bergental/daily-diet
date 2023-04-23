import { mealsGetAll } from './mealsGetAll';
import { MealListDTO, MealStorageDTO } from './MealStorageDTO';
import { parseDateWithoutTime } from '@utils/DateParse';

export async function mealsGetAllToLList() {
  try {
    const list: MealListDTO[] = [];
    const meals = await mealsGetAll();
    for (const meal of meals) {
      const group = parseDateWithoutTime(new Date(meal.date), '.');
      let item = list.find(item => item.group === group);
      if (!item) {
        item = { group, data: [] };
        list.push(item);
      }
      item.data.push(meal);
    }

    for (const item of list) {
      item.data.sort((a, b) => a.date - b.date);
    }
    return list;
  } catch(error) {
    throw error;
  }
}