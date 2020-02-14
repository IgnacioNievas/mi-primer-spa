import { Component } from '@angular/core';
import { DcService } from '../../servers/dc.service';
import{ActivatedRoute}from '@angular/router'

@Component({
  selector: 'app-dcx',
  templateUrl: './dcx.component.html',
})
export class DcxComponent {
dc:any={}
  constructor(private _dcs:DcService, private dro:ActivatedRoute ) {
    this.dro.params.subscribe(arg => this.dc = this._dcs.dh(arg['id']));
  }
 

}
