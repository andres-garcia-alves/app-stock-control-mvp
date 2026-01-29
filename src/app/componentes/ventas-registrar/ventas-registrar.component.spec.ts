import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { VentasRegistrarComponent } from './ventas-registrar.component';

describe('VentasRegistrarComponent', () => {
  let component: VentasRegistrarComponent;
  let fixture: ComponentFixture<VentasRegistrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentasRegistrarComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VentasRegistrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
