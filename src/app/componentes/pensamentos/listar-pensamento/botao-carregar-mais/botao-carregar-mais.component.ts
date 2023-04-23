import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-botao-carregar-mais',
  templateUrl: './botao-carregar-mais.component.html',
  styleUrls: ['./botao-carregar-mais.component.css']
})
export class BotaoCarregarMaisComponent implements OnInit {

  // Criado o atributo com o decorator Input para receber do componente pai (listar)
  // se existe pensamento a ser renderizado na página
  @Input() haMaisPensamentos: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
