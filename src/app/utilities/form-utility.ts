import {Injectable} from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Injectable()
export class FormUtility {

  constructor() {}

  /**
   * Recursive function to get all the controls or form groups on the form and touching them
   * to make them show any errors they would have
   * @param formGroup 
   */
  static validateAllFormFields(formGroup: FormGroup) {

    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


  
  /**
   * Display an error message for an input field if the field is invalid and touched
   * 
   * @param field 
   */
  static getErrorMessage(form: FormGroup, field: string) {
    let errMessage = '';

    // if the field isn't valid, then return an error message for the field - depending on what the error is
    if (!form.get(field).valid && form.get(field).touched) {
      if (form.get(field).hasError('email')) errMessage = 'Not a valid email';
      if (form.get(field).hasError('required')) errMessage = 'You must enter a value';
    }

    return errMessage;
  }
}