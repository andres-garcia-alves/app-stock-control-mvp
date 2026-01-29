import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StockTransferirService } from './stock-transferir.service';

describe('TransferirStockService', () => {
  let service: StockTransferirService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(StockTransferirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
