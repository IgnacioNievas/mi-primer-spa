import{Injectable} from '@angular/core';

@Injectable()
 export class HeroesService{
     private heroes:Heroe[]= [
        {
            nombre: "Hulk",
            bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
            bio2: 'Su principal poder es ...',
            img: "assets/img/hulk.png",
            img2: "assets/img/hu.png",
            aparicion: "1962-05-01",
            casa:"Marvel"
          },
        
        {
          nombre: "Daredevil",
          bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
          bio2: 'Al haber perdido la...',
          img: "assets/img/daredevil.png",
          img2: "assets/img/dd.png",
          aparicion: "1964-01-01",
          casa: "Marvel"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          bio2: 'Tras ser mordido por una...',
          img: "assets/img/spiderman.png",
          img2: "assets/img/spm.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
            nombre: "Thanos",
            bio: "Thanos aumentó su fuerza física y sus poderes a través de su conocimiento científico superior. También intentó crear una nueva vida para sí mismo al engendrar muchos niños y convertirse en pirata. No encuentra ninguna satisfacción en ninguno de los dos hasta que es visitado nuevamente por Señora Muerte, por quien asesina a su descendencia y su capitán pirata.",
            bio2: 'Thanos aumentó su...',
            img: "assets/img/thanos.png",
            img2: "assets/img/th.png",
            aparicion: "1973-02-01",
            casa: "Marvel"
          },
        {
          nombre: "Wolverine",
          bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
          bio2: 'En el universo ficticio de...',
          img: "assets/img/wolverine.png",
          img2: "assets/img/wol.png",
          aparicion: "1974-11-01",
          casa: "Marvel"
        }
      ];
     constructor(){}
getHeroe(idx:string){
   return this.heroes[idx]
}
     getHeroes():Heroe[]{
          return this.heroes;
     }
    } 

export interface Heroe {
    nombre: string;
    bio: string;
    bio2: string;
    img: string;
    img2:string;
    aparicion:string;
    casa:string;
 }