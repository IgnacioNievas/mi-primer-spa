import{Injectable} from '@angular/core';

@Injectable()
 export class SuperService{
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
        },{
            nombre: "Batman",
            bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
            bio2: 'Los rasgos principales de...',
            img: "assets/img/batman.png",
            img2: "assets/img/bat.png",
            aparicion: "1939-05-01",
            casa:"DC"
          },
          {
            nombre: "Linterna Verde",
            bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
            bio2: 'Poseedor del anillo de...',
            img: "assets/img/linterna-verde.png",
            img2: "assets/img/li.png",
            aparicion: "1940-06-01",
            casa: "DC"
          },
          
          {
              nombre: "Flash",
              bio: "Capacidad de correr más rápido que la luz,Tiene gran velocidad lo que le permite hacer cosas extraordinarias como,Reflejos sobrehumanos que le permiten reaccionar de manera mucho más eficiente a un ataque",
              bio2: 'Capacidad de correr más rápido que...',
              img: "assets/img/flash.png",
              img2: "assets/img/fal.png",
              aparicion: "1940-01-01",
              casa:"DC"
            },
            {
              nombre: "SuperMan",
              bio: "Superman nace en un mundo extraño a una especie tecnológicamente avanzada que se parece a los humanos. Poco después de nacer, su planeta se destruye en un cataclismo natural, pero el padre científico de Superman previó la calamidad y salva a su hijo bebé enviándolo a la Tierra en una pequeña nave espacial. Lamentablemente, la nave es demasiado pequeña para llevar a alguien más, por lo que los padres de Superman se quedan atrás y mueren. Las primeras tiras de periódicos nombran el planeta Krypton, el bebé Kal-L y sus padres biológicos Jor-L y Lora",
              bio2: 'Superman nace en un mundo extraño...',
              img: "assets/img/sup.png",
              img2: "assets/img/sp.png",
              aparicion: "1938-06-01",
              casa:"DC"
            },
            {
              nombre: "Aquaman",
              bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
              bio2: 'El poder más reconocido de...',
              img: "assets/img/aquaman.png",
              img2: "assets/img/aq.png",
              aparicion: "1941-11-01",
              casa:"DC"
            },{
              nombre: "Robin",
              bio: "Robin es un personaje ficticio de la editorial DC Comics, joven héroe compañero de Batman. Desde 1940 varios personajes han ocupado el rol de Robin, el original y más conocido ha sido el de Dick Grayson. Todas las versiones de Robin han sido las de un chico joven con traje colorido, bastante positivo y alegre, lo cual contrasta perfectamente con la apariencia oscura y personalidad seria de Batman.",
              img: "assets/img/robin.png",
              img2: "assets/img/ro.png",
              aparicion: "1938-04-01",
              casa:"DC",
              bio2:'Robin es un personaje ficticio de la editorial ...'
            }
      ];
     constructor(){}
    
sh(idx:string){
   return this.heroes[idx]
}
    
     buscars(term:string):Heroe[]{
       let heroesArr:Heroe[]=[];
       term = term.toLowerCase();
       for(let i = 0 ; i < this.heroes.length; i ++ ){
         let heroe = this.heroes[i];
         let nomb =heroe.nombre.toLowerCase();
        if (nomb.indexOf(term) >= 0){
          heroe.idx = i;
          heroesArr.push(heroe)
        }
       }
       return heroesArr;
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
    idx?:number;
 }