import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: User;
  token!: string;

  constructor(
    private router: Router,
  ) { }

  setUser (user: User) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser () {
    if (this.user){
      return this.user;
    }
    const savedUser = localStorage.getItem('user');
    if (savedUser){
      this.user = JSON.parse(savedUser)
      return this.user;
    }

    return null; //não há usuário
  }

  setToken (token: string) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  getToken () {
    if (this.token) {
      return this.token;
    }
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      this.token = savedToken;
      return this.token;
    }
    return null;
  }

  isLogged (): boolean{
    return this.getUser() && this.getToken() ? true : false;
  }

  logout () {
    this.user = {name: '', lastname: '', email: ''};
    this.token = '';
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
