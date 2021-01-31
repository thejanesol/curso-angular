import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  constructor() { }

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
  }

  showsError (nomeControle: string, form: NgForm) {
    if (!form.controls[nomeControle]){
      return false;
    }
    return form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }
}
