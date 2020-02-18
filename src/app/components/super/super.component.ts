import { Component } from '@angular/core';
import { SuperService } from '../../servers/super.service';
import{ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-super',
  templateUrl: './super.component.html',
})
export class SuperComponent  {
  
super:any={}
  constructor( private sp:SuperService ,private sc:ActivatedRoute){
    this.sc.params.subscribe(sr=> this.super= this.sp.sh(sr['id']));
  }
  

}


