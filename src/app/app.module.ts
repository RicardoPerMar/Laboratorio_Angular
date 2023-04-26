import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './pages/movie-list/card-movie/card-movie.component';
import { DatamovieListComponent } from './datamovie-list/datamovie-list.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { MovieEditComponent } from './pages/movie-edit/movie-edit.component';
import { FormsModule } from '@angular/forms';
import { FieldErrorDisplayComponent } from './common/field-error-display/field-error-display.component';
import { MovieCreateComponent } from './pages/movie-create/movie-create.component';

const appRoutes : Routes = [ // Rutas que tiene mi aplicación
  {path: '', component: MovieListComponent}, // Ruta raiz
  {path: 'edit/:id', component: MovieEditComponent},
  {path: 'edit', component: MovieEditComponent},
  {path: 'create', component: MovieCreateComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    DatamovieListComponent,
    MovieListComponent,
    MovieEditComponent,
    FieldErrorDisplayComponent,
    MovieCreateComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes), // Añade al modulo de rutas las rutas que yo cree en appRoutes
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
