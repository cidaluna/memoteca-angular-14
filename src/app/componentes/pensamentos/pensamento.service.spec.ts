import { TestBed } from '@angular/core/testing';
import { PensamentoService } from './pensamento.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PensamentoService', () => {
  let service: PensamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]  //fixed error NoProvider for HttpClient!
    });
    service = TestBed.inject(PensamentoService);
  });

  it('should be created pensamento service', () => {
    expect(service).toBeTruthy();
  });
});
