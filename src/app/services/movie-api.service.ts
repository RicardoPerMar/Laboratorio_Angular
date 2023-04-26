import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' // Hace que el servicio movie-api sea global
})
export class MovieApiService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<Movie[]>{
    return  this.http.get<Movie[]>('./api/movies');
  }

  Edit(movie: Movie, id: number): Observable<Movie> {
    return this.http.put<Movie>('./api/movies/' + id, movie);
  }

  Insert(movie: Movie) : Observable<Movie> {
    return this.http.post<Movie>('./api/movies', movie);
  }

  Delete(id: number){
    return this.http.delete('./api/movies/' + id);
  }

  getOne(id: number) : Observable<Movie>{
    return  this.http.get<Movie>('./api/movies/' + id);
  }
}
