import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Contatos } from './contatos.interface';

@Injectable({
  providedIn: 'root'
})

export class ContatosService {
  constructor(private http: HttpClient) {}
  API_URL = environment.API_URL;

  getContatos () {
    return this.http.get<Contatos[]>(`${this.API_URL}/contatos`);
  }

  getContato (id: number) {
    return this.http.get<Contatos>(`${this.API_URL}/contatos/${id}`);
  }

  deleteContact(id: number) {
    return this.http.delete<Contatos>(`${this.API_URL}/contatos/${id}`);
  }

  createContato(contato: Contatos){
    return this.http.post<Contatos[]>(this.API_URL + '/contatos', contato);
  }

  updateContato(id: number, contato: Contatos){
    return this.http.put<Contatos>(`${this.API_URL}/contatos/${id}`, contato)
  }
}