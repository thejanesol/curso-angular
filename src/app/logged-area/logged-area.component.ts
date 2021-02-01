import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logged-area',
  templateUrl: './logged-area.component.html',
  styleUrls: ['./logged-area.component.scss']
})
export class LoggedAreaComponent implements OnInit {

  // Binding enviando informação de componente pai para compoenente filho 
  title = "Seja bem vindo!";

  constructor() { }

  ngOnInit(): void {
  }

}
