import { Component, OnInit } from '@angular/core';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  /*
  pensamento: Pensamento = {
    id: 0,
    conteudo: '',
    autoria: '',
    modelo: ''
  }
  */

  formEdit!: FormGroup;

  constructor(private service: PensamentoService, private router: Router, private route: ActivatedRoute,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // criando uma constante que vai representar o id
    const id = this.route.snapshot.paramMap.get('id')
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamentoDoObservable) => {
      // Ao invés, de instanciar o formulário via FormGroup e FormControl, utilizado o FormBuilder que 
      // por debaixo dos panos atribui os controles aos campos, de forma mais clean.
      this.formEdit = this.formBuilder.group({
        id: [pensamentoDoObservable.id],
        conteudo: [pensamentoDoObservable.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamentoDoObservable.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamentoDoObservable.modelo]
      })
    })
  }

  editarPensamento(){
    this.service.editar(this.formEdit.value).subscribe(() => {
      this.router.navigate(['/listarPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listarPensamento'])
  }

  habilitarBotao(): string{
    if(this.formEdit.valid){
      return 'botao'
    }else{
      return 'botao__desabilitado'
    }
  }
}
