import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjetas-marvel',
  templateUrl: './tarjetas-marvel.component.html',
})
export class TarjetasMarvelComponent  {
@Input() he:any={};
@Input() index:number;
  constructor( private ro:Router) { }
  her(){
    this.ro.navigate(['/heroe', this.index])
  }
 

}
