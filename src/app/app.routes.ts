import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { DcComponent } from './components/dc/dc.component';
import { DcxComponent } from './components/dcx/dcx.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import{SuperComponent} from './components/super/super.component';
import{RouterModule,Routes} from '@angular/router';
const APP_ROUTES:Routes =[
    {path:'home', component: HomeComponent},
    {path:'about', component: AboutComponent},
    {path:'marvel', component: HeroesComponent},
    {path:'dc', component: DcComponent},
    {path:'dcx/:id', component: DcxComponent},
    {path:'heroe/:id', component: HeroeComponent},
    {path:'super/:id', component: SuperComponent},
    {path:'buscar/:termino', component: BuscarComponent},
    {path:'**', pathMatch:'full',redirectTo:'home'}
    
];
export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES,{useHash:true});