import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Transacao } from './extrato.interfaces';

// import { throwError } from 'rxjs/internal/observable/throwError';
// import { mergeMap } from 'rxjs/internal/operators/mergeMap';
@Injectable({
  providedIn: 'root' 
  //Uma service torna-se injetável quando acompanhada do decorator @Injectable
  // Podemos também prover os services nos modulos (array de providers)
})

// Uma service tb pode depender de outras services para seu funcionamento
export class ExtratoService {

  constructor(private http: HttpClient) {}
  API_URL = environment.API_URL;

    getTransacoes (page: number) {
      //Erros fabricados: 
      // return throwError(new Error('Erro generico')) 

      // const error = throwError(new Error('Erro generico'));
      // return timer(3000)
      // .pipe(
      //   mergeMap(() => error)
      // );

      //Transacao: Tipagem da chamada p/ uniformizar os dados
    return this.http.get<Transacao[]>(`${this.API_URL}/transacoes`, {
      //parametros da chamada
      params: {
        _page: page.toString(), //ou String(page)
      }
    })
}
}