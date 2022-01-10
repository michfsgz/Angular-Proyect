import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes: string [] = ["Spiderman", "Thor", "Iroman", "Hulk"]
  heroeBorrado : string =  '';


  borrarHerroe():void{
  this.heroeBorrado  =  this.heroes.shift() || ''
  }
}
