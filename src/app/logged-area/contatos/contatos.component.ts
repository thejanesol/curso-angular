import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from './contatos.interface';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss']
})
export class ContatosComponent implements OnInit {

  contatos!: Contatos[];
  estaCarregando: boolean = true;
  erroNoCarregamento: boolean = false;

  constructor(
    private contatosService: ContatosService,
    private router: Router //prove navegação e manipulação da URL
  ) { }

  ngOnInit(): void {
    this.carregarContatos();
  }

  carregarContatos () {
    this.estaCarregando = true;
    this.contatosService.getContatos()
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    )
  }

  onSuccess(response: Contatos[]){
      this.contatos = response;
  }

    onError(error: any){
      this.erroNoCarregamento = true;
      console.error(error);
  }

  goToDetails(idContato: number) {
    this.router.navigate([`contatos/${idContato}`])
  }
}
