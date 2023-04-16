import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
 /* Este é o componente filho, ele deve receber as informações do componente pai,
  *  que é o listar-pensamento, para isso deve utilizar o decorator @Input()
  */

 @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Cida Luna',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
