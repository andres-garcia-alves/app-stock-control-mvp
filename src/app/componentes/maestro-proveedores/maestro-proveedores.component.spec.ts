import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MaestroProveedoresComponent } from './maestro-proveedores.component';

describe('MaestroProveedoresComponent', () => {
  let component: MaestroProveedoresComponent;
  let fixture: ComponentFixture<MaestroProveedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroProveedoresComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroProveedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
