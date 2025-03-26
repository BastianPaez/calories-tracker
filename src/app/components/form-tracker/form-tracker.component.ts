import { JsonPipe } from '@angular/common';
import { Component, inject, input, output, signal, effect } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms'
import { ErrorComponent } from "../error/error.component";
import { CalorieEntrie, CalorieHistory } from '../../interfaces/tracker.interface';

@Component({
  selector: 'form-tracker',
  imports: [ ReactiveFormsModule, ErrorComponent],
  templateUrl: './form-tracker.component.html',
})
export class FormTrackerComponent {

  private fb = inject(FormBuilder)

  history = input.required<CalorieHistory[]>()

  value = output<CalorieEntrie>()
  valueEdited = output<CalorieHistory>()

  activeEdit = input.required<CalorieHistory>()
  isEdit = input.required<boolean>()

  editItem = effect(() => {
    if(this.isEdit()){
      this.myForm.controls['name'].setValue(this.activeEdit().name)
      this.myForm.controls['calories'].setValue(this.activeEdit().calories)
      this.myForm.controls['type'].setValue(this.activeEdit().type)
    }
  })

  myForm : FormGroup =this.fb.group({
    name: ['', Validators.required],
    calories: [0, [Validators.required, Validators.min(0)]],
    type:['food', Validators.required]
  })



  onSubmit(){
    this.myForm.markAllAsTouched()
    if(!this.myForm.valid) return

    if(this.isEdit()){
      this.valueEdited.emit({
        ...this.myForm.value,
        id: this.activeEdit().id
      })
    } else {
      this.value.emit(this.myForm.value)
    }

    this.myForm.reset()
    this.myForm.controls['type'].setValue('food')
  }

  markUntouched(field : string){
    this.myForm.controls[field].markAsUntouched()
  }

  isValidField(field : string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }


}
