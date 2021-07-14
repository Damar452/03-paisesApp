import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/paises-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  
  // placeholder:string = "Buscar por Capital";
  paises:Country[]= [];
  termino:string = "";
  hayError:boolean = false;
  
  constructor(private PaisService: PaisService) { }

 buscar(termino:string){
  this.hayError = false;
   this.termino = termino;

   this.PaisService.buscarCapital(this.termino).
   subscribe(paises=> {
     console.log(paises);
     this.paises = paises;
     
   }, (err =>{
     this.hayError = true;
     this.paises = [];
   }));
 }


 sugerencias( termino:string ){
    this.hayError = false;
    //TODO crear sugerencias
 }

}
