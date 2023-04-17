import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Datamovie } from '../model/datamovie.model';

@Component({
  selector: 'app-datamovie-list',
  templateUrl: './datamovie-list.component.html',
  styleUrls: ['./datamovie-list.component.css']
})
export class DatamovieListComponent {
  @Input() datamovies: Datamovie[] = []; // Parametro de entrada para los datos de la película
  @Output() close = new EventEmitter(); // Evento que permitirá para cerrar los datos que se muestran al usuario

  onCloseClick(){ // Método que emite un evento para cerrar los datos que se muestran al clickar en el título
    this.close.emit(); // Emite el evento creado anteriormente que servirá para cerrar otro evento ()
  }
}
