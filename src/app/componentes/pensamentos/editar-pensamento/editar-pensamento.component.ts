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
    this.service.buscarPorId(parseInt(id!)).subscribe((pensamento) => {
      // Ao invés, de instanciar o formulário via FormGroup e FormControl, utilizado o FormBuilder que 
      // por debaixo dos panos atribui os controles aos campos, de forma mais clean.
      this.formEdit = this.formBuilder.group({
        id: [pensamento.id],
        conteudo: [pensamento.conteudo, Validators.compose([
          Validators.required,
          Validators.pattern(/(.|\s)*\S(.|\s)*/)
        ])],
        autoria: [pensamento.autoria, Validators.compose([
          Validators.required,
          Validators.minLength(3)
        ])],
        modelo: [pensamento.modelo],
        favorito: [pensamento.favorito]
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
