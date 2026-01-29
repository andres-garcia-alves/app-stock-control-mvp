import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProveedoresService } from './proveedores.service';

describe('ProveedoresService', () => {
  let service: ProveedoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(ProveedoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
