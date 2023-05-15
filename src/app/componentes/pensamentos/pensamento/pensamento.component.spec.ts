import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensamentoComponent } from './pensamento.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PensamentoComponent', () => {
  let component: PensamentoComponent;
  let fixture: ComponentFixture<PensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamentoComponent ],
      imports: [ 
        HttpClientTestingModule, // fixed No provider for HttpClient!
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
