import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  // Este componente pai passa as informações para o componente filho
  // Após criar a Interface Pensamento, declaramos a propriedade ListaPensamentos como um array e inicializamos
  // vazio pois os dados virão agora através do arquivo db.json que simula uma API Backend Json Server.
  listaPensamentos: Pensamento[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
