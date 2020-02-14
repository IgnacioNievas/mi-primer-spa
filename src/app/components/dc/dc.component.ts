import { Component, OnInit } from '@angular/core';
import { DcService ,Hero} from '../../servers/dc.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-dc',
  templateUrl: './dc.component.html',
})
export class DcComponent implements OnInit {

  heroes:Hero []=[];
  constructor(private _dcService:DcService ,private rou:Router) { }

  ngOnInit() {
this.heroes = this._dcService.getHeroe();
  }
  
  dhero(idx:number){
    this.rou.navigate(['/dcx', idx])
  }

}
