import { Component, input, output } from '@angular/core';
import { CalorieCardComponent } from "../calorie-card/calorie-card.component";
import {  CalorieHistory } from '../../interfaces/tracker.interface';

@Component({
  selector: 'list-tracker',
  imports: [CalorieCardComponent],
  templateUrl: './list-tracker.component.html',
})
export class ListTrackerComponent {

  history = input.required<CalorieHistory[]>()
  editId = output<string>()
  deleteId = output<string>()

 }
