import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '@/model/movie.model';
import { MovieApiService } from '@/services/movie-api.service';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent {
  id: number;
  name: string;
  poster?: string;
  year: string;
  director: string;
  movie: Movie;

  constructor(private route: ActivatedRoute, private movieApi: MovieApiService){
    this.id = Number(this.route.snapshot.paramMap.get('id'))!; // Toma la ruta y coge el parametro 'id' de la ruta si es que hay
    this.name = this.route.snapshot.paramMap.get('name')!; // Toma la ruta y coge el parametro 'name' de la ruta si es que hay
    this.poster = this.route.snapshot.paramMap.get('poster')!; // Toma la ruta y coge el parametro 'poster' de la ruta si es que hay
    this.year = this.route.snapshot.paramMap.get('year')!; // Toma la ruta y coge el parametro 'year' de la ruta si es que hay
    this.director = this.route.snapshot.paramMap.get('director')!; // Toma la ruta y coge el parametro 'director' de la ruta si es que hay
    this.movie = new Movie(this.id);
  }

  handleSaveClick(){
    this.movieApi.Edit(this.movie);
    console.log(this.movie)
  }
}
