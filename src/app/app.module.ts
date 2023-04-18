import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './pages/movie-list/card-movie/card-movie.component';
import { DatamovieListComponent } from './datamovie-list/datamovie-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieEditComponent } from './pages/movie-edit/movie-edit.component';

const appRoutes : Routes = [ // Rutas que tiene mi aplicación
  {path: '', component: MovieListComponent}, // Ruta raiz
  {path: 'edit/:name', component: MovieEditComponent}, // Ruta edit que recibe el nombre del juego (los parametros se pasan con dos puntos (:name))
];

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    DatamovieListComponent,
    MovieListComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Añade al modulo de rutas las rutas que yo cree en appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
