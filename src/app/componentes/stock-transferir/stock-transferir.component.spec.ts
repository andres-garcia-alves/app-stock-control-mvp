import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StockTransferirComponent } from './stock-transferir.component';

describe('StockTransferirComponent', () => {
  let component: StockTransferirComponent;
  let fixture: ComponentFixture<StockTransferirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockTransferirComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockTransferirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
