import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Datamovie } from '../model/datamovie.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent {
  @Input() movie!: Movie; // Parametro de entrada para mostrar la caratula de la pelicula con el título
  @Output() showDatamovieList = new EventEmitter<Datamovie[]>(); // Emision de un evento para mostrar los datos de la película

  onTitleClick(){ // Cuando se clicke el titulo, emite la lista de los datos de la pelicula con @Output showDatamovieList
    this.showDatamovieList.emit(this.movie.datamovie); // "this.movie.datamovie" es la variable dentro del modelo "movie"
  }
}