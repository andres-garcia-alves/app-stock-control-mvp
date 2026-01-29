import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { MaestroLocalesComponent } from './maestro-locales.component';

describe('MaestroLocalesComponent', () => {
  let component: MaestroLocalesComponent;
  let fixture: ComponentFixture<MaestroLocalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaestroLocalesComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaestroLocalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
