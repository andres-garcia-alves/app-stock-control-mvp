import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StockBajaService } from './stock-baja.service';

describe('StockBajaService', () => {
  let service: StockBajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(StockBajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
