import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './card-movie/card-movie.component';
import { DatamovieListComponent } from './datamovie-list/datamovie-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CardMovieComponent,
    DatamovieListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
