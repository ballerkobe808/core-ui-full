import { Injectable } from "@angular/core";
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as $ from 'jquery';

@Injectable()
export class FormUtility {

  constructor() {}

  /**
   * 1. Check for any invalid fields
   * 2. Mark them as touched, so their error displays
   * 3. Go to the first invalid field
   * @param formGroup 
   */
  static validateAllFormFields(formGroup: FormGroup) {

    // loop through all the form controls recursively
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true })
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });

    // now focus on the first invalid form - using a quick scroll
    this.focusInvalidField();
  }



  /**
   * Focuses on the first invalid form - using a quick scroll
   */
  static focusInvalidField() {
    // using jquery to find the first invalid element, then scroll there
    let el = $('.ng-invalid:not(form):first');
    if (el && el.offset()) {
      $('html,body').animate({ scrollTop: (el.offset().top - 20) }, 'fast', () => {
        el.focus();
      });
    }
  }



  /**
   * Display an error message for an input field 
   * Saving a mapping of all errors here so that all forms will reference this
   * one method
   * 
   * @param field 
   */
  static getErrorMessage(form: FormGroup, field: string) {
    let errMessage = '';


    // if the field isn't valid, then return an error message for the field - depending on what the error is
    if (field && !form.get(field).valid && form.get(field).touched) {
      if (form.get(field).hasError('email')) errMessage = 'Not a valid email';
      if (form.get(field).hasError('required')) errMessage = 'You must enter a value';
    }

    return errMessage;
  }




  // match validator example directive taken from
  // https://www.code-sample.com/2017/09/angular-4-form-password-match-validator.html
  // static matchValidator(fieldName: string) {
  //   let fcfirst: FormControl;
  //   let fcSecond: FormControl;

  //   return function matchValidator(control: FormControl) {
  //       if (!control.parent) {
  //           return null;
  //       }

  //       // INITIALIZING THE VALIDATOR.
  //       if (!fcfirst) {
  //           //INITIALIZING FormControl first
  //           fcfirst = control;
  //           fcSecond = control.parent.get(fieldName) as FormControl;

  //           //FormControl Second
  //           if (!fcSecond) {
  //               throw new Error('matchValidator(): Second control is not found in the parent group!');
  //           }
  //           fcSecond.valueChanges.subscribe(() => {
  //               fcfirst.updateValueAndValidity();
  //           });
  //       }

  //       if (!fcSecond) {
  //           return null;
  //       }

  //       if (fcSecond.value !== fcfirst.value) {
  //           return {
  //               matchOther: true
  //           };
  //       }

  //       return null;
  //   }
  // }
}