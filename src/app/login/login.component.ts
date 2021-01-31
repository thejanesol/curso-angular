import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //Essa variavel é uma referencia ao HTML
  @ViewChild('emailInput')
  emailInput!: ElementRef;

  @ViewChild('passwordInput')
  passwordInput!: ElementRef;

  email: string = "";
  passowrd: string = "";

  constructor(
    private loginService: LoginService,
  ) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if(!form.valid){
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

  login (){
    this.loginService.loginTo(this.email, this.passowrd)
    .subscribe (
      response => {
        console.log('Usuário logado.')
      },
      error => {
        console.log('A autenticação falhou. Usuário não está logado.')
      }
    )
  }

  showsError (nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }
}
