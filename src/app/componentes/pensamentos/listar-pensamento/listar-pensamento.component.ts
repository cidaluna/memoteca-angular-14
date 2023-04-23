import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

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
  haMaisPensamentos: boolean = true;
  filtro: string = '';
  favoritos: boolean = false;
  listaFavoritos: Pensamento[] = [];
  titulo: string = 'Meu Mural';

  // Após a criação do PensamentoService, posso consumir os métodos criados lá.
  constructor(private service: PensamentoService, private router: Router) { }

  ngOnInit(): void {
    // Já quero inicializar o componente de listagem e já aviso que sou um subscriber
    // ou seja, retorno o que o Observable do Service me informar
    // Agora o metodo listar precisa do número da página como parâmetro
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      this.listaPensamentos = listaPensamentos
    })
  }

  carregarMaisPensamentos(){
    this.service.listar(++this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos) => {
      // spread operator ... para listar os pensamentos da lista e acrescentar os 6 de cada página
      this.listaPensamentos.push(...listaPensamentos);
      if(!this.listaPensamentos.length){
        this.haMaisPensamentos = false;
      }
    })
  }

  pesquisarPensamentos(){
    //manter a paginação funcionando
    this.haMaisPensamentos = true;
    // sempre que o recurso de pesquisar for utilizado, a página atual recebe o valor 1
    this.paginaAtual = 1;
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listaPensamentos)=> {
      this.listaPensamentos = listaPensamentos
    })
  }

  recarregarComponente(){
    this.favoritos = false;
    this.paginaAtual = 1;
    // não quer o padrão de reutilização de rotas
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // atraves da classe router podemos utilizar manipulação e recursos entre views
    this.router.onSameUrlNavigation = 'reload'
    this.router.navigate([this.router.url])   // representa a url atual
  }

  listarFavoritos(){
    this.titulo = 'Meus Favoritos'
    this.favoritos = true
    this.haMaisPensamentos = true
    this.paginaAtual = 1
    this.service.listar(this.paginaAtual, this.filtro, this.favoritos).subscribe((listarPensamentosFavoritos) => {
      this.listaPensamentos = listarPensamentosFavoritos
      this.listaFavoritos = listarPensamentosFavoritos 
    })
  }
}
