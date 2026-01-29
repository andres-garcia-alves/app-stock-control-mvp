import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VentasVisualizarComponent } from './ventas-visualizar.component';

describe('VentasVisualizarComponent', () => {
  let component: VentasVisualizarComponent;
  let fixture: ComponentFixture<VentasVisualizarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasVisualizarComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasVisualizarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
