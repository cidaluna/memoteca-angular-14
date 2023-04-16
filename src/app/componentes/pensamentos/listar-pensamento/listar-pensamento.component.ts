import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  // Este componente pai passa as informações para o componente filho
  listaPensamentos = [
    // {
    // conteudo: 'Aprendendo Angular com Cida Luna',
    // autoria: 'Dev Cida',
    // modelo: 'modelo2'
    // },
    // {
    //   conteudo: 'Teste objeto declarado no componente pai',
    //   autoria: 'Componente pai',
    //   modelo: 'modelo1'
    //   }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
