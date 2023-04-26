import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@/model/movie.model';
import { MovieApiService } from '@/services/movie-api.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css'],
})
export class MovieEditComponent {
  id: number;
  movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieApiService: MovieApiService
  ) {

    this.id = 0;
    this.movie = new Movie();
    this.id = Number(this.route.snapshot.paramMap.get('id'))!

  }

  loadMovie = () => {
    // Método asincrono (ejecucion rápida y carga rápida de datos) que llama al método getAll() (contiene las peliculas) del servicio movie-api y los almacena en la variable local "movies"
    this.movieApiService.getOne(this.id).subscribe(
      (movie) => (this.movie = movie),
      (error) => alert(error.message),
    );
  };

  ngOnInit() : void {
    this.loadMovie();
  }

  handleSaveClick(form: NgForm) {
    if (form.valid) {
      this.movieApiService.Edit(this.movie, this.id).subscribe({
        next: (movie) => {
          this.id = movie.id!;
          alert('Juego actualizado correctamente');
          console.log(movie);
        },
        error: (error) => {
          alert('Error al actualizar el juego');
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
