import { Component, Input, Output,EventEmitter } from '@angular/core';





@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',

})
export class TarjetasComponent {
  @Input() hex:any={};
  @Input() index:number;
  @Output() heroSeleccionado:EventEmitter<number>;
  constructor() {
    this.heroSeleccionado = new EventEmitter();
   }

  dhero(){
    this.heroSeleccionado.emit(this.index);
  }
}
