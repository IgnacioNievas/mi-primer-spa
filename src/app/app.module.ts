import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//Rutas
import {APP_ROUTING} from './app.routes'
//Servicios
import{HeroesService} from './servers/heroes.service';
import{DcService} from './servers/dc.service';
import{SuperService} from './servers/super.service'

//componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DcComponent } from './components/dc/dc.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { DcxComponent } from './components/dcx/dcx.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { SuperComponent } from './components/super/super.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    HomeComponent,
    HeroesComponent,
    DcComponent,
    HeroeComponent,
    DcxComponent,
    BuscarComponent,
    SuperComponent
  ],
  imports: [
    BrowserModule,
APP_ROUTING

  ],
  providers: [HeroesService,DcService,SuperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
