import { Component } from '@angular/core';

import { MEMES_AGRUPADOS_POR_CATEGORIA } from './dados';

 
@Component({
  selector: 'app-exercicio-diretivas',
  templateUrl: './exercicio-diretivas.component.html',
  styleUrls: ['./exercicio-diretivas.component.scss']
})
export class ExercicioDiretivasComponent {
  condition = false;

  changeCondition() {
    this.condition = !this.condition;
  }

  sum(a: any, b: any) {
    return a + b;
  }

  fruitsList = [,
    'Melancia',
    'Morango',
    'Tangerina',
    'Mamão',
    'Laranja'
  ]

  carsList = [{
    placa: "NPX-3054",
    cor: "preto"
  },
  {
    placa: "NPX-3154",
    cor: "vermelho"
  },
  {
    placa: "NPX-3254",
    cor: "branco"
  },
  {
    placa: "NPX-3054",
    cor: "azul"
  }
  ];

  // Desafio memes
  MEMES = MEMES_AGRUPADOS_POR_CATEGORIA;
  URL = "../assets/images";
}
