import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcluirPensamentoComponent } from './excluir-pensamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('ExcluirPensamentoComponent', () => {
  let component: ExcluirPensamentoComponent;
  let fixture: ComponentFixture<ExcluirPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluirPensamentoComponent ],
      imports: [ 
        HttpClientTestingModule, // fixed No provider for HttpClient!
        ReactiveFormsModule,     // fixed No provider for FormBuilder!
        RouterTestingModule      // fixed No provider for ActivatedRoute!
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluirPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
