import { Component } from '@angular/core';
import { Movie } from '../../model/movie.model';
import { Datamovie } from '../../model/datamovie.model';
import { MovieApiService } from '../../services/movie-api.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent {
  movies: Movie[] = []; // Array de peliculas
  showDatamovieList: boolean = false; // Booleano que almacena si se está mostrando o no
  datamovies: Datamovie[] = []; // Variable para los datos de la pelicula que sea seleccionada

  constructor(private movieApiService: MovieApiService) {
    // Pide el servicio mediante inyección de dependencias, es decir, busca quien está registrado
  }

  loadMovies = async () => {
    // Método asincrono (ejecucion rápida y carga rápida de datos) que llama al método getAll() (contiene las peliculas) del servicio movie-api y los almacena en la variable local "movies"
    this.movies = await this.movieApiService.getAll();
  };

  ngOnInit(): void {
    // Ciclo de vida del proyecto
    this.loadMovies(); // Cuando el componente esta disponible se carga
  }

  onShowDatamovieList(datamovies: Datamovie[]) {
    // Método que cambia el booleano showDatamovieList a true y pasa por parametros un array de Datamovie que se mostrará
    this.datamovies = datamovies; // Almacena los datos de la pelicula seleccionada en la variable creada anteriormente
    this.showDatamovieList = true;
  }

  onCloseDatamovieList() {
    // Método que cambia el booleano showDatamovieList a true
    this.showDatamovieList = false;
  }
}
