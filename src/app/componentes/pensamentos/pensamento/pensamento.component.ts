import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {
 /* Este é o componente filho, ele deve receber as informações do componente pai,
  *  que é o listar-pensamento, para isso deve utilizar o decorator @Input()
  */

 @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Cida Luna',
    modelo: 'modelo3',
    favorito: false
  }

  constructor(private service: PensamentoService) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

  mudarIconeFavorito(): string{
    if(this.pensamento.favorito == false){
      return 'inativo'
    }else{
      return 'ativo'
    }
  }

  atualizarFavoritos(){
    // preciso consumir o método criado no service, logo preciso injetar o service aqui no constructor
    this.service.mudarFavorito(this.pensamento).subscribe();
    console.log(this.pensamento.favorito)
  }

}
