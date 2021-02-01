import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss']
})
export class DetalhesContatoComponent implements OnInit {
  constructor(
    private route: ActivatedRoute, //classe do angular router para lidar com a rota ativa
    private contatosService: ContatosService,
    private router: Router //prove navegação e manipulação da URL
  ) { }

  ngOnInit() {
    const idContato = Number(this.route.snapshot.paramMap.get('id')) 
    //snapshot: foto da rota atual
    this.carregarContato(idContato);
  }

  contato!: Contatos;
  estaCarregando: boolean = true;
  erroNoCarregamento: boolean = false;


  carregarContato (idContato: number) {
    this.estaCarregando = true;
    this.contatosService.getContato(idContato)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccess(response),
      error => this.onError(error)
    )
  }

  onSuccess(response: Contatos){
      this.contato = response;
      console.log(this.contato)
  }

    onError(error: any){
      this.erroNoCarregamento = true;
      console.error(error);
  }

  returnToContatos (){
    this.router.navigate([`contatos/`]);
  }
}
