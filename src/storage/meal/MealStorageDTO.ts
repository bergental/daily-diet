export type MealStorageDTO = {
  id?: string;
  date: number;
  name: string;
  description: string;
  onTheDiet: boolean
}

export type MealListDTO = {
  group: string,
  data: MealStorageDTO[]
}