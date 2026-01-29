import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MaestroProductosComponent } from './maestro-productos.component';

describe('MaestroProductosComponent', () => {
  let component: MaestroProductosComponent;
  let fixture: ComponentFixture<MaestroProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroProductosComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
