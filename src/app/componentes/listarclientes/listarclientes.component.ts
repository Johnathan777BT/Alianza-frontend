import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientesServiceService } from '../../services/clientes-service.service';

import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-listarclientes',
  templateUrl: './listarclientes.component.html',
  styleUrl: './listarclientes.component.scss'
})
export class ListarclientesComponent  implements OnInit {

  nombre_campo:string=" ";
  json:String="";
  errorMessage:String="";
  lista: any[] = [];

  formulario = this.formBuilder.group({

    nombre: ['', Validators.required],

  });


  constructor(private formBuilder: FormBuilder, private router:Router, private clienteservice:ClientesServiceService){

  }

  ngOnInit(): void {
    this.getListbyName(0,'');
  }



  downloadCSV():void{

    console.log("download csv");
    const fileName ='reporte_'+Math.random()+'.csv';
    this.clienteservice.getCSV(this.nombre_campo).subscribe( (res:any)=>
      {
        let filename = res.headers
        ?.get('content-disposition')
        ?.split(';')[1]
        .split('=')[1];
      let blob: Blob = res.body as Blob;
      var a = document.createElement('a');
      a.setAttribute('download', fileName);
     
      a.href = window.URL.createObjectURL(blob);
      a.click();
      }, err => {
        
        if(err.status==403){
          alert('No tiene permisos para realizar la solicitud');
        }
        
        // Aquí se emitirá el alerta con el mensaje que `throwError` devuelva.
      }
      
    )

  }


  getListbyName(page : number, nombre:string): void{
    
    

    this.clienteservice.getList(nombre).subscribe(
      (data) => {
     
      console.log(data);
      if(data.length==0 || !data){
        this.lista = [];
        
      }
      else {
        
        this.lista = data;      
      
      }

      },
      error => {
        console.log("error listando comerciantes");
      // Aquí se debería tratar el error, bien mostrando un mensaje al usuario o de la forma que se desee.
      }
    );

  }

  enviarFormulario(): void {


    console.log("nombre:"+this.nombre_campo);


    if (this.formulario.valid) {
  
     this.nombre_campo  = this.formulario.controls.nombre.value!;
  
       console.log("nombre:"+this.nombre_campo);
      
       this.getListbyName(0, this.nombre_campo);

    } else {
  
      // Manejar caso de formulario inválido
  
    }
  
  }



}
