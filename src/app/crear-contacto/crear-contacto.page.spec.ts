import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearContactoPage } from './crear-contacto.page';

describe('CrearContactoPage', () => {
  let component: CrearContactoPage;
  let fixture: ComponentFixture<CrearContactoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
