import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/paises-interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
     
     button {
      margin-right: 5px;
    }

    `
  
  ]
})

export class PorRegionComponent  {

  regiones:string[]= ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService:PaisService) { }

  activarRegion ( region:string){

    if (region === this.regionActiva){return}
    this.regionActiva= region;
    this.paises = [];

    //TODO hacer el llamado a servicio

    this.paisService.buscarRegion(region)
    .subscribe(paises => {
      this.paises = paises;
    });
  }

  getClases( region:string):string{
    return (region === this.regionActiva)
            ?'btn btn-primary'
            :'btn btn-outline-primary';
  }

 
}
