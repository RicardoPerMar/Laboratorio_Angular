import { Component } from '@angular/core';


@Component({
  selector: 'app-root', // Como se va a llamar al componente en el HTML
  templateUrl: './app.component.html', // Ruta del HTML
  styleUrls: ['./app.component.css'], // Ruta del fichero de estilos
})
export class AppComponent {
  title = 'movie-catalog';

  constructor(){}
}
