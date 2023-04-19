import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

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
  paginaAtual: number = 1;

  // Após a criação do PensamentoService, posso consumir os métodos criados lá.
  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
    // Já quero inicializar o componente de listagem e já aviso que sou um subscriber
    // ou seja, retorno o que o Observable do Service me informar
    // Agora o metodo listar precisa do número da página como parâmetro
    this.service.listar(this.paginaAtual).subscribe((listaPensamentoDoObservable) => {
      this.listaPensamentos = listaPensamentoDoObservable
    })
  }

}
