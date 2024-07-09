import { AfterViewChecked, Component, ViewChild, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientesServiceService } from '../../services/clientes-service.service';
import { DatePipe } from '@angular/common';
import { Clientes } from './clientes';


@Component({
  selector: 'app-crearclientes',
  templateUrl: './crearclientes.component.html',
  styleUrl: './crearclientes.component.scss'
})
export class CrearclientesComponent {


  json:String="";
  clientes:Clientes = new Clientes();


  registerForm=this.formBuilder.group({
    id:[''],
    fechainicio:['',Validators.required],
    nombre:['', Validators.required],
    telefono:['',Validators.required],
    correo_electronico:['',Validators.required],
    fechafin:['',Validators.required],
  })



 validateFormat(event:any) {
  let key;
  if (event.type === 'paste') {
    key = event.clipboardData.getData('text/plain');
  } else {
    key = event.keyCode;
    key = String.fromCharCode(key);
  }
  const regex = /[0-9]/;
   if (!regex.test(key)) {
    event.returnValue = false;
     if (event.preventDefault) {
      event.preventDefault();
     }
   }
  }



  constructor(private datePipe: DatePipe, private formBuilder:FormBuilder, private router:Router, private activateRoute: ActivatedRoute, private clienteservice:ClientesServiceService){

  }


  get nombre()
  {
    return this.registerForm.controls.nombre;
  }

  get fechainicio()
  {
    return this.registerForm.controls.fechainicio;
  }

  get fechafin()
  {
    return this.registerForm.controls.fechafin;
  }

   get telefono(){
    return this.registerForm.controls.telefono;
   }

   get correo_electronico(){

        return this.registerForm.controls.correo_electronico;
   }


   saveData() {


    if (this.registerForm.valid)
      {
  
          let fecha_formateada = this.registerForm.controls.fechainicio.value!;
          let fecha_formateada2 = this.registerForm.controls.fechafin.value!;
          let fecha_nueva = fecha_formateada.toString();
          let fecha_nueva2 = fecha_formateada2.toString();
  
         let v= this.datePipe.transform(fecha_nueva,"dd-MM-yyyy"); //esto funka
         let vfin = this.datePipe.transform(fecha_nueva2, "dd-MM-yyyy");

          this.clientes.telefono= this.registerForm.controls.telefono.value!;
          this.clientes.nombre= this.registerForm.controls.nombre.value!;
          this.clientes.fechainicio=v!;
          this.clientes.fechafin=vfin!;
          this.clientes.email= this.registerForm.controls.correo_electronico.value!;
         
          console.log("fecha_enviadaaaa fin_ "+this.clientes.fechafin);
         
        this.json = JSON.stringify(  this.clientes );
  
        console.log("json: "+this.json);
     
        this.clienteservice.create(this.json).subscribe({
          next:() => {
          
            console.log("nombre: "+this.clientes.nombre);
  
        alert('Cliente Insertado con Exito!');
        this.router.navigate(['listarclientes']);
          },
          error:(errorData)=> {
            console.error(errorData);
            alert(''+errorData);
          }
        })
  
      
      }


   }

}
