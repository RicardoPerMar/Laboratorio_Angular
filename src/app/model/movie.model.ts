/* MODELO DE LA CLASE MOVIE*/

import { Datamovie } from "./datamovie.model";

export class Movie{
  id?: number;
  name?: string;
  poster?: string;
  director?: string;
  year?: string;
  datamovie?: Datamovie[];

  constructor(id?: number, name?: string, director?: string, year?: string, poster?: string, datamovie?: Datamovie[]){
    this.id = id;
    this.name = name;
    this.poster = poster;
    this.director = director;
    this.year = year;
    this.datamovie = datamovie;
  }
}
