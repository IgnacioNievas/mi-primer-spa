import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../servers/heroes.service';
import{Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',

})
export class HeroesComponent implements OnInit {
 heroes:Heroe []=[];
  constructor(private _heroesService:HeroesService , private rout:Router) { }

  ngOnInit() {
this.heroes = this._heroesService.getHeroes();
  }
  her(idx:number){
    this.rout.navigate(['/heroe',idx]);
  }

}
