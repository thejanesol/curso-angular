import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { timer } from 'rxjs/internal/observable/timer';
import { delay } from 'rxjs/internal/operators/delay';
import { mergeMap, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth/auth.service';
import { LoginResponse } from './login.interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authService: AuthService
  ) { }

  loginTo(email: string, password: string): Observable<LoginResponse> {
    // return this.http.post(`${this.API_URL}/auth`, contato, this.httpOptions);

    if (email === 'jana@gmail.com' && password === '123') {
      //criação de observable ficticio
      return of({
        user: {
          name: 'Janaina',
          lastname: 'Santos',
          email: 'jana@gmail.com'
        },
        token: 'aabbccdd123'
      }).pipe(
        delay(2000),
        tap(response => {
          this.authService.setUser(response.user);
          this.authService.setToken(response.token);
        })
      );
    }
    
    return timer(3000)
      .pipe(
        mergeMap(() => throwError('USUÁRO OU SENHA INCORRETOS.'))
      );
  }
}
