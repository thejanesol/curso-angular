import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { finalize, take } from 'rxjs/operators';

import { Contatos } from '../contatos.interface';
import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {

  contato!: Contatos;
  idContato!: number;
  contatoForm!: FormGroup;
  estaCarregando!: boolean;
  erroNoCarregamento: boolean = false;

  constructor(
    private route: ActivatedRoute, 
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeForm();
    this.idContato = Number(this.route.snapshot.paramMap.get('id'))
    if (this.isEditingContact()){
      this.carregarContato(this.idContato)
    }
  }

  isEditingContact = () => Boolean(this.idContato);

  initializeForm () {
    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      banco: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
    })
  };

  carregarContato (idContato: number) {
    this.estaCarregando = true;
    this.contatosService.getContato(idContato)
    .pipe(
      take(1),
      finalize(() => this.estaCarregando = false)
    )
    .subscribe(
      response => this.onSuccessCarregarContato(response),
      error => this.onErrorCarregarContato(error)
    )
  }

  onSuccessCarregarContato(response: Contatos){
      this.contatoForm.patchValue(response)
      // outra forma de declarar: {nome: response.nome, ag: response.ag, cpf: response.cpf, ...} 
  }

    onErrorCarregarContato(error: any){
      this.erroNoCarregamento = true;
      console.error(error);
  }

  validateAllFormsFields () {
    Object.keys(this.contatoForm.controls).forEach(field => {
      const control = this.contatoForm.get(field)
      control?.markAsTouched()
    });
  }

  //API FAKE! Não cria contato concretamente, só faz a chamada :)
  createContato(){
    this.contatosService.createContato(this.contatoForm.value)
    .subscribe(
      response => this.onSucessCreateContato(),
      error => this.onErrorActionContato()
    )
  }

  onSucessCreateContato(){
    this.router.navigate(['contatos'])
    this.toastr.success('Contato criado com sucesso!', 'OK');
  }

  saveContato () {
    this.contatosService.updateContato(this.idContato, this.contatoForm.value)
    .subscribe(
      response => this.onSucesSaveContato(),
      error => this.onErrorActionContato()
    )
  }

  onSucesSaveContato () {
    this.router.navigate(['contatos'])
    this.toastr.success('Contato editado com sucesso!', 'OK');

  }

  onErrorActionContato() {
    this.toastr.error('Contato não foi editado.', 'Erro!');
  }

  onSubmit() {
    if (!this.contatoForm.valid) {
      this.validateAllFormsFields();
      return;
    }

    if(this.isEditingContact()){
      this.saveContato();
    } else {
      this.createContato();
    }
  }

  showsError(nomeControle: string) {
    if (!this.contatoForm.controls[nomeControle]) {
      return false;
    }
    return this.contatoForm.controls[nomeControle]?.invalid && this.contatoForm.controls[nomeControle]?.touched;
  }

}
