import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { movieMockCollection } from './movie-api.mock';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Hace que el servicio movie-api sea global
})
export class MovieApiService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Movie[]>{
    return  this.http.get<Movie[]>('http://localhost:3001/movies');
  }

  Edit(movie: Movie, id: number): Observable<Movie> {
    return this.http.put<Movie>('./api/movies/' + id, movie);
  }
}
