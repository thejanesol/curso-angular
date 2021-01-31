import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { timer } from 'rxjs/internal/observable/timer';
import { delay } from 'rxjs/internal/operators/delay';
import { mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  loginTo(email: string, password: string) {
    // return this.http.post(`${this.API_URL}/auth`, contato, this.httpOptions);

    if (email === 'jana@gmail.com' && password === '123') {
      //criação de observable ficticio
      return of({
        user: {
          name: 'janaina',
          email: 'jana@gmail.com'
        },
        tokenAuth: 'aabbccdd123'
      }).pipe(
        delay(2000)
      );
    }
    
    return timer(2000)
      .pipe(
        mergeMap(() => throwError('USUÁRO OU SENHA INCORRETOS.'))
      );
  }
}
