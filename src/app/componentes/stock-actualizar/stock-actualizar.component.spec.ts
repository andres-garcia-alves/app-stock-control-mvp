import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StockActualizarComponent } from './stock-actualizar.component';

describe('StockActualizarComponent', () => {
  let component: StockActualizarComponent;
  let fixture: ComponentFixture<StockActualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockActualizarComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockActualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
