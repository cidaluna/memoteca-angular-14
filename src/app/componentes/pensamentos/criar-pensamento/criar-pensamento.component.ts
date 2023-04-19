import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      autoria: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      modelo: ['modelo1']
    })
  }

  criarPensamento(){
    // Chama o service, cria o card com o que está sendo digitado,
    // e ao clicar no botão Salvar, o usuário será redirecionado para a listagem de pensamentos
    console.log(this.formulario.status)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      }
    )}
  }
  

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

}
