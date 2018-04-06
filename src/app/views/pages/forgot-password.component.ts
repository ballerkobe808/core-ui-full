import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import {FormUtility} from "../../utilities/index";

@Component({
  templateUrl: 'forgot-password.component.html'
})
export class ForgotPasswordComponent {
  form: FormGroup; // main formgroup for this page

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}


  ngOnInit() {
    // setup the form and fields in the form 
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]]
    });
  }


  /**
   * Display an error message for an input field if the field is invalid and touched
   * 
   * @param field 
   */
  getErrorMessage(field: string) {
    return FormUtility.getErrorMessage(this.form, field);
  }


  resetPassword() {
    // if password passes, go to the dashboard
    if (this.form.valid) {
      this.router.navigate(['/pages/login']);
    }
    // if the form isnt valid, then display any trouble fields
    else {
      FormUtility.validateAllFormFields(this.form);
    }

  }





}
