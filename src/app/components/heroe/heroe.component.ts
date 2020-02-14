import { Component } from '@angular/core';
import { HeroesService } from '../../servers/heroes.service';
import{ActivatedRoute, Router}from '@angular/router'

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {
  heroe:any ={};
  constructor(private act:ActivatedRoute, private _he:HeroesService,private _rout:Router) { 
    this.act.params.subscribe(pa =>{
     this.heroe= this._he.getHeroe(pa['id']);
    })
  }
  volver(){
    this._rout.navigate(['/marvel']);
  }


}
