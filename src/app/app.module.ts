import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { DatamovieListComponent } from './datamovie-list/datamovie-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';

const appRoutes : Routes = [ // Rutas que tiene mi aplicación
  {path: '', component: MovieListComponent} // Ruta raiz
];

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    DatamovieListComponent,
    MovieListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Añade al modulo de rutas las rutas que yo cree en appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
