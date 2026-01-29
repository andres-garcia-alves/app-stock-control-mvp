import { TestBed, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Stock-Control'`, () => {
    expect(component.title).toEqual('Stock-Control');
  });

  it('should render title', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-navbar')).toBeTruthy();
  });
});
