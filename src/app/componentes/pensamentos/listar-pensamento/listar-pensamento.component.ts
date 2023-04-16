import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {
  // Este componente pai passa as informações para o componente filho
  listaPensamentos = [
    {
      conteudo: 'Aprendendo Angular com Cida Luna',
      autoria: 'Dev Cida',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In arcu turpis, consequat ut nisl eu,  mattis id. Maecenas et ma ipsum dolor sit amet, consectetur adipiscing elit. In arcu turpis, consequat ut nisl eu,  mattis id. Maecenas et mattis mi, ut sodales magnantum',
      autoria: 'Componente pai teste',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Teste objeto declarado no componente pai',
      autoria: 'Componente pai',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Aprendendo Angular com Cida Luna',
      autoria: 'Dev Cida',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Teste objeto declarado no componente pai',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Aprendendo Angular com Cida Luna',
      autoria: 'Dev Cida',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Teste objeto declarado no componente pai',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
