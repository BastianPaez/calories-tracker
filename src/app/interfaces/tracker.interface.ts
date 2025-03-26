

export interface CalorieHistory {
  id: string,
  type: string,
  name: string,
  calories: number
}

export type CalorieEntrie = Omit<CalorieHistory, 'id'>
