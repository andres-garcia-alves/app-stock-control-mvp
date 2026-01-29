import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StockBajaComponent } from './stock-baja.component';

describe('StockBajaComponent', () => {
  let component: StockBajaComponent;
  let fixture: ComponentFixture<StockBajaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockBajaComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBajaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
