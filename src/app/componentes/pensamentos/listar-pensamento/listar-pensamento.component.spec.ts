import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPensamentoComponent } from './listar-pensamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('ListarPensamentoComponent', () => {
  let component: ListarPensamentoComponent;
  let fixture: ComponentFixture<ListarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarPensamentoComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      imports: [ 
        HttpClientTestingModule, // fixed No provider for HttpClient!
        ReactiveFormsModule,     // fixed No provider for FormBuilder!
        FormsModule,             // fixed Error: NG0201: No provider for NgControl found in NodeInjector!
        RouterTestingModule      // fixed No provider for ActivatedRoute!
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create listar pensamento', () => {
    expect(component).toBeTruthy();
  });
});
