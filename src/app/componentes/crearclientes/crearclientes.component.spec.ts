import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearclientesComponent } from './crearclientes.component';

describe('CrearclientesComponent', () => {
  let component: CrearclientesComponent;
  let fixture: ComponentFixture<CrearclientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CrearclientesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();


  });

  it('should create', () => {
   
    expect(component).toBeTruthy(); // que exita el componente
    

  });

  it('invalid', () => {
    fixture = TestBed.createComponent(CrearclientesComponent);
    const app = fixture.componentInstance;
     const _email = app.registerForm.controls.correo_electronico;
      _email.setValue("gerard@gmail.cocm");
    expect(app.registerForm.invalid).toBeTrue(); // que este invalid 
  });


  it('valid', () => {
    fixture = TestBed.createComponent(CrearclientesComponent);
    const app = fixture.componentInstance;
     const _email = app.registerForm.controls.correo_electronico;
      _email.setValue("gerard@gmail.cocm");
      const _nombre = app.registerForm.controls.nombre;
      _nombre.setValue("DIego");
      const _fechai = app.registerForm.controls.fechainicio;
      _fechai.setValue("2/2/2004")
      const _fechafi = app.registerForm.controls.fechafin;
      _fechafi.setValue("2/2/2024")

      const _tel = app.registerForm.controls.telefono;
      _tel.setValue("312200004")

    expect(app.registerForm.invalid).toBeFalse(); // que este valid 
  });

});
