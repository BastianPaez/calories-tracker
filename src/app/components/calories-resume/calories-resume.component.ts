import { Component, computed, input } from '@angular/core';

@Component({
  selector: 'calories-resume',
  imports: [],
  templateUrl: './calories-resume.component.html',
})
export class CaloriesResumeComponent {

  foodCalories= input.required<number>()
  activityCalories= input.required<number>()

  balance = computed(() => this.foodCalories() - this.activityCalories())

 }
