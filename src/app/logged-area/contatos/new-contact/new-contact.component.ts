import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ContatosService } from '../contatos.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.scss']
})
export class NewContactComponent implements OnInit {

  contatoForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private contatosService: ContatosService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // this.contatoForm = new FormGroup({
    //   nome: new FormControl(),
    //   banco: new FormControl()
    // });

    this.contatoForm = this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      banco: ['', Validators.required],
      ag: ['', [Validators.required, Validators.minLength(4)]],
      cc: ['', [Validators.required, Validators.minLength(5)]],
    })
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
      error => this.onErrorCreateContato()
    )
  }

  onSucessCreateContato(){
    this.toastr.success('Contato criado com sucesso!', 'OK');
    this.router.navigate(['contatos'])
  }

  onErrorCreateContato(){
    this.toastr.error('Contato não foi criado.', 'Erro!');
  }

  onSubmit() {
    if (!this.contatoForm.valid) {
      this.validateAllFormsFields();
      return;
    }
    this.createContato();
  }

  showsError(nomeControle: string) {
    if (!this.contatoForm.controls[nomeControle]) {
      return false;
    }
    return this.contatoForm.controls[nomeControle]?.invalid && this.contatoForm.controls[nomeControle]?.touched;
  }

}
