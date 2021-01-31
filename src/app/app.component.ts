import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Binding enviando informação de componente pai para compoenente filho 
  title = "Seja bem vindo!";

  singleWord = "palavra: ";
  favoriteColor = "blue";

  onClicked($event: any){
    console.log("Evento recebido \n" + $event)
  }

  counterValue = 10;

  /*Exemplo abaixo: sem usar o two way data binding: teria uma função p capturar 
  evento e uma variavel. com o two way data binding, podemos unir os dois 
  (função + variável com "[()]")*/
  
  // newCounterValue(newValue: any){
  //   this.counterValue = newValue;
  //   console.log("valor atualizado para: " + newValue)
  // }

}
