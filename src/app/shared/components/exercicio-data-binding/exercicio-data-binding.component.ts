import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent {

  constructor() { }

  // Binding enviando informação de componente pai para compoenente filho 
  @Input() word: string | undefined;
  @Input() color: string | undefined;

  //Usando o binding de propriedade
  image = "https://images.unsplash.com/photo-1520690214124-2405c5217036?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";

  getImage() {
    return this.image;
  }

  //Captura informações do evento
  onClick($event: any) {
    console.log($event)
  }

  inputValue = "";

  typed($event: any) {
    this.inputValue = $event.target.value; //Atualiza valor da variável de acordo com evento
    console.log($event)
  }

  mouseOn() {
    console.log("o mouse passou em cima do botão")
  }

  @Output() clicked = new EventEmitter(); //importado do ARGULAR CORE!!
  onClick2($event: any) {
    console.log("Devo emitir informações para o componente pai.")
    this.clicked.emit("Evento: " + $event)
  }

}
