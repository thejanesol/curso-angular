import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from '../shared/services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  user: any;

  constructor(
    private authService: AuthService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
  
  openModal(content: any) {
    this.modalService.open(content).result.then((result: any) => {
     console.log('Modal closed')
    }, (reason: any) => {
      console.log('Modal dismissed')
    });
  }

  closeResult = '';



}
