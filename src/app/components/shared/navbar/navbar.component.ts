import { Component } from '@angular/core';
import{Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  constructor(private rou:Router  ) { 
   
  }

  buscarHer(ter:string){
 this.rou.navigate(['/buscar',ter])

} }


