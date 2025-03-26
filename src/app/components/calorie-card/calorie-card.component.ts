import { Component, input, output, signal } from '@angular/core';
import { CalorieHistory } from '../../interfaces/tracker.interface';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'calorie-card',
  imports: [TitleCasePipe],
  templateUrl: './calorie-card.component.html',
})
export class CalorieCardComponent {

  entrie = input.required<CalorieHistory>()

  editId = output<string>()

  deleteId = output<string>()

 }
