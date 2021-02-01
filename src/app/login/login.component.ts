import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/internal/operators/finalize';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading: boolean = false;
  loginError!: boolean;

  //Essa variavel é uma referencia ao HTML
  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  email: string = "";
  passowrd: string = "";

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this.loginError = false;
    if (!form.valid) {
      form.controls.email.markAsTouched();
      form.controls.password.markAsTouched();

      if (form.controls.email.invalid) {
        this.emailInput.nativeElement.focus();
      }

      if (form.controls.password.invalid) {
        this.passwordInput.nativeElement.focus();
      }

      return;
    }
    // console.log(this.email)
    this.login();
  }

  login() {
    this.loading = true;
    this.loginService.loginTo(this.email, this.passowrd)
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(
        response => this.onLoginSucess(),
        error => this.onLoginError()
      )
  }

  onLoginSucess() {
    this.router.navigate([`home`])
  }

  onLoginError() {
    this.loginError = true;
  }

  showsError(nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]) {
      return false;
    }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }
}
