import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-exercicio-contador',
  templateUrl: './exercicio-contador.component.html',
  styleUrls: ['./exercicio-contador.component.scss']
})
export class ExercicioContadorComponent {

  constructor() { }
//Exercicio da aula 11 - Contador
  // Two Way Data Binding: o output deve ter o mesmo nome do input + a palavra change!!
  @Input() counter!: number; 
  @Output() counterChange = new EventEmitter();

  add() {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  decrease() {
   if(this.counter != 0){
    this.counter--;
    this.counterChange.emit(this.counter);
   }
  }

}
