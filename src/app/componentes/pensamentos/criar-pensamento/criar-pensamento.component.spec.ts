import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarPensamentoComponent } from './criar-pensamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

describe('CriarPensamentoComponent', () => {
  let component: CriarPensamentoComponent;
  let fixture: ComponentFixture<CriarPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarPensamentoComponent ],
      imports: [ HttpClientTestingModule,
        ReactiveFormsModule    // fixed No provider for FormBuilder!
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create criar pensamento', () => {
    expect(component).toBeTruthy();
  });
});
