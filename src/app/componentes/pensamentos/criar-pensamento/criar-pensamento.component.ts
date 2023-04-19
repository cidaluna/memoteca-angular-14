import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { minusculoValidator } from './minusculoValidators';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  // Objeto para preencher os inputs do html
  /*
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }
  */

  // Evoluindo a aplicação com validações do módulo FormBuilder
  formulario!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Ao invés, de instanciar o formulário via FormGroup e FormControl, utilizado o FormBuilder que 
    // por debaixo dos panos atribui os controles aos campos, de forma mais clean.
    this.formulario = this.formBuilder.group({
      // Adicionando os atributos do formulário
      conteudo: ['', Validators.compose([Validators.required, Validators.pattern(/(.|\s)*\S(.|\s)*/)])],
      autoria: ['', Validators.compose([
        Validators.required, 
        Validators.minLength(3),
        minusculoValidator
      ])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    // Chama o service, cria o card com o que está sendo digitado,
    // e ao clicar no botão Salvar, o usuário será redirecionado para a listagem de pensamentos
    // console.log(this.formulario.status)
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      }
    )}
  }
  

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string {
    if(this.formulario.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
/*
Exemplo de Validators:
Validators.min()
  Validador que exige que o valor do controle seja maior ou igual ao número fornecido.

Validators.max()
  Validador que exige que o valor do controle seja menor ou igual ao número fornecido.

Validators.requiredTrue()
  Validador que exige que o valor do controle seja verdadeiro. Este validador é comumente usado para caixas de seleção obrigatórias.

Validators.email()
  Validador que exige que o valor do controle passe em um teste de validação de email.

Validators.maxLength()
  Validador que exige que o comprimento do valor do controle seja menor ou igual ao tamanho máximo fornecido.

Validators.nullValidator()
  Validador de valores nulos.

Validators.composeAsync()
  Compõe vários validadores assíncronos em uma única função que retorna a união dos objetos de erro individuais para o controle fornecido.
*/
}
