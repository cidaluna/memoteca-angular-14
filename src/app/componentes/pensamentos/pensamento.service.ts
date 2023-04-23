import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  // O Decorator @Injectable sinaliza que essa classe pode ser utilizada em outras classes.
  // O ProvideIn é um provedor setado como root, significa que ele esta visível para toda a aplicação.
  // O service é onde fica a lógica de negócios, os métodos CRUD para requisitar comunicação com o Servidor.
  // A injeção de dependência aqui é feita no constructor, ou seja, o atributo http solicita
  //   as dependências para uma classe externa (HttpClient) sem necessidade de possuí-las.
  // O atributo http é declarado como privado, pois dessa forma ele é considerado automaticamente
  //   como um atributo desta classe PensamentoService.

  private readonly API = 'http://localhost:3000/pensamentos'
  // Lembrar de acessar o diretório backend e rodar o comando npm start para disponibilizar os dados ao Frontend

  constructor(private http: HttpClient) { }

  // Este método listar por padrão retornará um Observable, ou seja, sempre que houver uma mudança
  // nos dados ele irá avisar quem esta interessado em saber (os interessados são os subscribers)
  // Implementado a paginação que o Json Server oferece: GET /posts?_page=7&_limit=20
  listar(pagina: number, filtro: string, favoritos: boolean): Observable<Pensamento[]>{
    const itensPorPagina = 6;

    //criando atributo parâmetros que o Backend Json Server precisa, através da classe HttpParams
    let params = new HttpParams()
    .set("_page", pagina)
    .set("_limit", itensPorPagina)

    // trim remove espaços vazios da string
    if(filtro.trim().length > 2){
      // Este q é de query e está definido no Json Server
      params = params.set("q", filtro)
    }

    if(favoritos){
      params = params.set("favorito", true)
    }
    //modo antigo return this.http.get<Pensamento[]>(`${this.API}?_page=${pagina}&_limit=${itensPorPagina}`)
    return this.http.get<Pensamento[]>(this.API, {params: params})
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    // Para cadastrar utilizamos o método POST, precisamos da URL da API Backend e dos dados do pensamento
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  mudarFavorito(pensamento: Pensamento): Observable<Pensamento>{
    pensamento.favorito = !pensamento.favorito;
    // Para evitar de termos código redundante, podemos chamar o método editar que já está fazendo o mesmo
    //const url = `${this.API}/${pensamento.id}`
    //return this.http.put<Pensamento>(url, pensamento)
    return this.editar(pensamento)
  }

  excluir(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: number): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }


  /*
Conheça os outros métodos do HttpParams:
    HttpParams.has()
        Informa se o corpo inclui um ou mais valores para um determinado parâmetro.

    HttpParams.get()
        Recupera o primeiro valor de um parâmetro.

    HttpParams.getAll()
        Recupera todos os valores de um parâmetro.

    HttpParams.keys()
        Recupera todos os parâmetros para este corpo da requisição.

    HttpParams.append()
        Acrescenta um novo valor aos valores existentes para um parâmetro.

    HttpParams.appendAll()
        Constrói um novo corpo com valores anexados para o nome do parâmetro fornecido.

    HttpParams.delete()
        Remove um determinado valor ou todos os valores de um parâmetro.

    HttpParams.toString()
        Serializa o corpo da requisição em uma string codificada, em que os pares de chave-valor (separados por =) são separados por & s.

  */
}
