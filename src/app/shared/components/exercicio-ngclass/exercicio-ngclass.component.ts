import { Component } from '@angular/core';

// É possivel escrever os styles e template no próprio arquivo ts, mas não é uma boa prática!
@Component({
  selector: 'app-exercicio-ngclass', //Tag do component, chamado lá no arquivo app.component.html
  templateUrl: './exercicio-ngclass.component.html',
  styleUrls: ['./exercicio-ngclass.component.scss']
})
export class ExercicioNgclassComponent {
  shouldBeGreen = false;

  changeColor () {
    this.shouldBeGreen = !this.shouldBeGreen;
  }

}
