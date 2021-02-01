import { Component, Input, OnInit } from '@angular/core';

import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

/* A classe HeaderComponent está implementando a interface OnInit, 
que diz pra ela quais métodos ela deve ter (verifica se a classe está seguindo os padrões!)*/

export class HeaderComponent implements OnInit {

  @Input () title: string | undefined;

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    
  }

  logout () {
    this.authService.logout();
  }

}
