import {Component, inject, signal } from '@angular/core';
import { FormTrackerComponent } from "../../components/form-tracker/form-tracker.component";
import { CaloriesTrackerService } from '../../services/calories-tracker.service';
import { ListTrackerComponent } from "../../components/list-tracker/list-tracker.component";
import { CaloriesResumeComponent } from "../../components/calories-resume/calories-resume.component";

@Component({
  selector: 'app-calories-tacker',
  imports: [FormTrackerComponent, ListTrackerComponent, CaloriesResumeComponent],
  templateUrl: './calories-tacker.component.html',
})
export default class CaloriesTackerComponent {

  caloriesService = inject(CaloriesTrackerService);


}
