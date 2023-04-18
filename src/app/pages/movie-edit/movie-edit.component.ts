import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent {
  name: string;
  constructor(private route: ActivatedRoute){
    this.name = this.route.snapshot.paramMap.get('name')!; // Toma la ruta y coge el parametro 'name' de la ruta si es que hay
  }
}
