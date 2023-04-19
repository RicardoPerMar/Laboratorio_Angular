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
  name: string;
  poster?: string;
  year: string;
  director: string;
  movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieApi: MovieApiService
  ) {
    this.id = Number(this.route.snapshot.paramMap.get('id'))!;
    this.name = this.route.snapshot.paramMap.get('name')!;
    this.poster = this.route.snapshot.paramMap.get('poster')!;
    this.year = this.route.snapshot.paramMap.get('year')!;
    this.director = this.route.snapshot.paramMap.get('director')!;
    this.movie = new Movie();
  }

  handleSaveClick(form: NgForm) {
    if (form.valid) {
      this.movieApi.Edit(this.movie, this.id).subscribe({
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
