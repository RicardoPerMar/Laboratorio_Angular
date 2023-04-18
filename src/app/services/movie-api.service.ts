import { Injectable } from '@angular/core';
import { Movie } from '../model/movie.model';
import { movieMockCollection } from './movie-api.mock';

@Injectable({
  providedIn: 'root' // Hace que el servicio movie-api sea global
})
export class MovieApiService {

  constructor() { }

  getAll() : Promise<Movie[]>{ // NI IDEA LO QUE HACE PROMISE
    return Promise.resolve(movieMockCollection);
  }

  Edit(movie: Movie): Promise<Movie> {
    movieMockCollection.fill(movie, Number((movie.id!)-1), movie.id);
    return Promise.resolve(movie);
  }
}
