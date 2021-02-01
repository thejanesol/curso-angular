import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { Transacao } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  page: number = 1;
  transacoes!: Transacao[];
  estaCarregando: boolean = true;
  //tipo any: variável pode ser qualquer coisa. (retira a tipagem, a evitar!!)

  erroNoCarregamento: boolean = false;

  constructor(
    private extratoService: ExtratoService
    /* angular vai injetar automaticamente a service (dependencia) no construtor e ela ficara
    disponível no construtor */
  ) { }

  arrayOfTransacoes = [];

  ngOnInit(): void {
    this.carregarExtrato();
  }

  carregarExtrato() {
    this.estaCarregando = true;
    this.erroNoCarregamento = false;

    this.extratoService.getTransacoes(this.page)
    .pipe(
      take(1), //fecha o observable (desinscreve) - boa prática!
      finalize(() => this.estaCarregando = false)
 )
      .subscribe(
        response => this.onSucess(response), 
        error => this.onError(error),
        )
    };
    /* A requisição get no angular retorna uma observable, então temos que nos inscrever nela
    para receber a resposta quando a api retorná-la (async) */

    onSucess (response: Transacao[]) {
      this.transacoes = response;
    }

    onError (error: any) {
      this.erroNoCarregamento = true;
      console.error(error);
    }

    paginaAnterior () {
      this.page -= 1;
      this.carregarExtrato();
    }

    proximaPagina () {
      this.page += 1;
      this.carregarExtrato();
    }
}
