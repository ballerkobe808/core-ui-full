import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { FormUtility, matchOtherValidator } from "../../utilities/index";

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

  form: FormGroup; // main formgroup for this page
  password = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}


  ngOnInit() {
    // setup the form and fields in the form 
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
      repeatPassword: ['', [Validators.required, matchOtherValidator('password')]]
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


  /**
   * Create an account
   */
  createAccount() {
    // if password passes, go to the login
    if (this.form.valid) {
      this.router.navigate(['/pages/login']);
    }
    // if the form isnt valid, then display any trouble fields
    else {
      FormUtility.validateAllFormFields(this.form);
    }
  }


}
