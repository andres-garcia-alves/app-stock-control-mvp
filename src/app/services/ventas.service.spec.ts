import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VentasService } from './ventas.service';

describe('VentasService', () => {
  let service: VentasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(VentasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
