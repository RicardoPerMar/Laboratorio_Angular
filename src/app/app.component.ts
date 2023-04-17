import { Component } from '@angular/core';
import { Movie } from './model/movie.model';
import { Datamovie } from './model/datamovie.model';

@Component({
  selector: 'app-root', // Como se va a llamar al componente en el HTML
  templateUrl: './app.component.html', // Ruta del HTML
  styleUrls: ['./app.component.css'], // Ruta del fichero de estilos
})
export class AppComponent {
  // Inicializa componenetes
  title = 'movie-catalog';
  movies: Movie[]; // Array de peliculas
  showDatamovieList: boolean = false; // Booleano que almacena si se está mostrando o no
  datamovies: Datamovie[] = []; // Variable para los datos de la pelicula que sea seleccionada

  constructor() {
    this.movies = [
      // Datos de las peliculas
      new Movie(
        1,
        'Blade Runner',
        'Ridley Scott',
        1982,
        'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/bladerunner.png',
        [
          {
            name: 'Blade Runner',
            director: 'Ridley Scott',
            year: 1982,
          },
        ]
      ),
      new Movie(
        2,
        'Interstellar',
        'Christopher Nolan',
        2014,
        'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/interstellar.png',
        [
          {
            name: 'Interstellar',
            director: 'Christopher Nolan',
            year: 2014,
          },
        ]
      ),
      new Movie(
        3,
        '2001 space odyssey',
        'Stanley Kubrick',
        1968,
        'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/2001_space_odyssey.png',
        [
          {
            name: '2001 space odyssey',
            director: 'Stanley Kubrick',
            year: 1968,
          },
        ]
      ),
    ];
  }

  ngOnInit(): void {} // Ciclo de vida del proyecto

  onShowDatamovieList(datamovies: Datamovie[]){ // Método que cambia el booleano showDatamovieList a true y pasa por parametros un array de Datamovie que se mostrará
    this.datamovies = datamovies; // Almacena los datos de la pelicula seleccionada en la variable creada anteriormente
    this.showDatamovieList = true;
  }

  onCloseDatamovieList(){ // Método que cambia el booleano showDatamovieList a true
    this.showDatamovieList = false;
  }
}
