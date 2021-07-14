import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li {
    cursor: pointer;
  }
  `
  ]
})
export class PorPaisComponent  {

  // placeholder:string = "Buscar por Pais";
  paises:Country[]= [];
  paisesSugeridos:Country[]= [];
  termino:string = "";
  hayError:boolean = false;
  mostrarSugerencias:boolean = false;
  constructor(private PaisService: PaisService) { }

 buscar(termino:string){
  this.hayError = false;
   this.termino = termino;

   this.PaisService.buscarPais(this.termino).
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
    this.termino = termino;
    this.mostrarSugerencias = true;
    //TODO crear sugerencias

    this.PaisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugeridos = paises.splice(0,5),
    (err) => this.paisesSugeridos = [] 
    );
 }


 buscarSugerido(termino:string){
    this.buscar(termino);  //hola
    
 }

}
