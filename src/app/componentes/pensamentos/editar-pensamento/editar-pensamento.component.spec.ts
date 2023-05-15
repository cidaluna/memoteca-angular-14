import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPensamentoComponent } from './editar-pensamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditarPensamentoComponent', () => {
  let component: EditarPensamentoComponent;
  let fixture: ComponentFixture<EditarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarPensamentoComponent ],
      imports: [ 
        HttpClientTestingModule, // fixed No provider for HttpClient!
        ReactiveFormsModule,     // fixed No provider for FormBuilder!
        RouterTestingModule      // fixed No provider for ActivatedRoute!
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create editar pensamento', () => {
    expect(component).toBeTruthy();
  });
});
