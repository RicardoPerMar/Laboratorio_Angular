import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@/model/movie.model';
import { MovieApiService } from '@/services/movie-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent {
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieApiService: MovieApiService
  ) {
    this.movie = new Movie();
  }

  handleSaveClick(form: NgForm) {
    if (form.valid) {
      this.movieApiService.Insert(this.movie).subscribe({
        next: (movie) => {
          alert("Pelicula insertado correctamente");
          console.log(movie);
        },
        error: (error) => {
          alert("Error al insertar la pelicula");
          console.log(error);
        }
      });
    }else{
      alert(
        'Formulario inválido. Comprueba si hay errores de validación en alguno de los campos del formulario'
      );
    }
  }
}
