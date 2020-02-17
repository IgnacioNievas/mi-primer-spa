import{Injectable} from '@angular/core';

@Injectable()
 export class DcService{
     private heroes:Hero[]= [
        {
          nombre: "Batman",
          bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
          img: "assets/img/batman.png",
          img2: "assets/img/bat.png",
          aparicion: "1939-05-01",
          casa:"DC",
          bio2:'Los rasgos principales de...'
        },
        {
          nombre: "Linterna Verde",
          bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
          img: "assets/img/linterna-verde.png",
          img2: "assets/img/li.png",
          aparicion: "1940-06-01",
          casa: "DC",
          bio2:'Poseedor del anillo de...'
        },
        
        {
            nombre: "Flash",
            bio: "Capacidad de correr más rápido que la luz,Tiene gran velocidad lo que le permite hacer cosas extraordinarias como,Reflejos sobrehumanos que le permiten reaccionar de manera mucho más eficiente a un ataque",
            img: "assets/img/flash.png",
            img2: "assets/img/fal.png",
            aparicion: "1940-01-01",
            casa:"DC",
            bio2:'Capacidad de correr más rápido que la...'
          },
          {
            nombre: "SuperMan",
            bio: "Superman nace en un mundo extraño a una especie tecnológicamente avanzada que se parece a los humanos. Poco después de nacer, su planeta se destruye en un cataclismo natural, pero el padre científico de Superman previó la calamidad y salva a su hijo bebé enviándolo a la Tierra en una pequeña nave espacial. Lamentablemente, la nave es demasiado pequeña para llevar a alguien más, por lo que los padres de Superman se quedan atrás y mueren. Las primeras tiras de periódicos nombran el planeta Krypton, el bebé Kal-L y sus padres biológicos Jor-L y Lora",
            img: "assets/img/sup.png",
            img2: "assets/img/sp.png",
            aparicion: "1938-06-01",
            casa:"DC",
            bio2:'Superman nace en un mundo extraño...'
          },
          {
            nombre: "Aquaman",
            bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
            img: "assets/img/aquaman.png",
            img2: "assets/img/aq.png",
            aparicion: "1941-11-01",
            casa:"DC",
            bio2:'El poder más reconocido de Aquaman es...'
          }
      ];
     constructor(){}

     getHeroe():Hero[]{
          return this.heroes;
     }
     dh( idx:string){
      return this.heroes[idx]
    }
    
} 
 

export interface Hero {
    nombre: string;
    bio: string;
    bio2:string;
    img: string;
    img2:string;
    aparicion:string;
    casa:string;
 }