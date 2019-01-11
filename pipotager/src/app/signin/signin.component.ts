import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {SigninService} from './signin.service'
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private signinService : SigninService ) { }

  ngOnInit() {
    if(localStorage.getItem('x-auth-token')){
      //TODO verifier que le token est toujours valable
    }

    this.loginForm = this.formBuilder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    });

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = false;
      return;
    };

    this.signinService.signin(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe(
        data=>{ this.router.navigate(['/dashboard']);},
        err=>{
          //TODO err
          console.log(err)});
  }


}
