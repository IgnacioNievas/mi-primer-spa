import { Component, OnInit } from '@angular/core';
import { SuperService } from '../../servers/super.service';
import{ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
})
export class BuscarComponent implements OnInit {
  heroes:any[]=[]
  termino:string;

  constructor(private av:ActivatedRoute, private _ds:SuperService, private ro:Router) { }

  ngOnInit() {
    this.av.params.subscribe(pax =>{
      this.heroes= this._ds.buscars(pax['term']);
      this.termino= pax['term'];
  });}
  dhero(idx:number){
    this.ro.navigate(['/super',idx]);
  }
}
