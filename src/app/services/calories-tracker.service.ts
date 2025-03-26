import { computed, effect, Injectable, signal } from '@angular/core';
import type { CalorieEntrie, CalorieHistory } from '../interfaces/tracker.interface';

// const placeholder : CalorieHistory[] = [
//   {
//     id: '1',
//     type: 'activity',
//     name: 'run',
//     calories: 100
//   },
//   {
//     id: '2',
//     type: 'food',
//     name: 'Pizza',
//     calories: 300
//   },
//   {
//     id: '3',
//     type: 'food',
//     name: 'apple',
//     calories: 50
//   },
// ]

const loadLocalStorage = () => {
  const history = localStorage.getItem('history')
  return history ? JSON.parse(history) : []
}

@Injectable({ providedIn: 'root' })
export class CaloriesTrackerService {


  history = signal<CalorieHistory[]>(loadLocalStorage())

  activeID = signal<CalorieHistory>({
    id: '',
    type: '',
    name: '',
    calories: 0
  })


  isEdit = signal<boolean>(false)

  activityCalories = computed(() => {
    const activities: CalorieHistory[] = this.history().filter(item => item.type === 'activity')
    return activities.reduce((sum, item) => sum + item.calories, 0)
  })
  foodCalories = computed(() => {
    const activities: CalorieHistory[] = this.history().filter(item => item.type === 'food')
    return activities.reduce((sum, item) => sum + item.calories, 0)
  })

  saveLocalStorage = effect(() =>
    localStorage.setItem('history', JSON.stringify(this.history()))
)



  setNewHistory(entrie: CalorieEntrie) {

    const newEntrie = {
      ...entrie,
      id: crypto.randomUUID()
    }

    this.history.update(prev => [...prev, newEntrie])
  }

  pasteItem(id: string) {
    const currentEdit: CalorieHistory = this.history().filter(item => item.id === id)[0]
    this.activeID.set(currentEdit)
    this.isEdit.set(true)
    console.log(this.activeID())
  }

  getEditedItem(itemUpdated: CalorieHistory) {

    const historyUpdated = this.history().map(item => {
      if (item.id === itemUpdated.id) {
        return itemUpdated
      }
      return item
    })

    this.history.set(historyUpdated)
    this.isEdit.set(false)
    this.activeID.set({
      id: '',
      type: '',
      name: '',
      calories: 0
    })
  }

  deleteItem(id : string){
    this.history.update(prev => prev.filter(item => item.id !==id))
  }


}
