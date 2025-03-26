
import { JsonPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-error',
  imports: [],
  templateUrl: './error.component.html',
})
export class ErrorComponent {

  error = input.required<ValidationErrors>()


  getErrorText(){
    for(const key of Object.keys(this.error())){
      switch (key) {
        case 'required':
          return 'This field is required'
        case 'min':
          return 'The minumun calories is 0'
        default:
          return `Error no controlado ${key}`
      }
    }
    return ''
  }

 }
