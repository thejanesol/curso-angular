import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio-pipes',
  templateUrl: './exercicio-pipes.component.html',
  styleUrls: ['./exercicio-pipes.component.scss']
})
export class ExercicioPipesComponent {
  film = {
    title: 'Harry potter',
    rate: 4.89565,
    rentalPrice: 15.45,
    releaseDate: new Date(2019, 5, 30) //O mês começa pelo zero!! 11 = dezembro
  };

  // Desafio
  shopping = [
    {
      product: 'lâmpada',
      price: 299.29,
      quantity: 2,
      weight: 0,
      date: new Date(2020, 1, 1, 15, 20),
    }, {
      product: 'farinha',
      price: 450.29,
      quantity: 2,
      weight: 29.33333,
      date: new Date(2020, 1, 1, 10, 30),
    },];
}
