import { Movie } from "@/model/movie.model";

export const movieMockCollection = [
  // Datos de las peliculas
  new Movie(
    1,
    'Blade Runner',
    'Ridley Scott',
    "1982",
    'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/bladerunner.png',
    [
      {
        name: 'Blade Runner',
        director: 'Ridley Scott',
        year: "1982",
      },
    ]
  ),
  new Movie(
    2,
    'Interstellar',
    'Christopher Nolan',
    "2014",
    'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/interstellar.png',
    [
      {
        name: 'Interstellar',
        director: 'Christopher Nolan',
        year: "2014",
      },
    ]
  ),
  new Movie(
    3,
    '2001 space odyssey',
    'Stanley Kubrick',
    "1968",
    'https://raw.githubusercontent.com/Lemoncode/angular-lab-2023/main/media/2001_space_odyssey.png',
    [
      {
        name: '2001 space odyssey',
        director: 'Stanley Kubrick',
        year: "1968",
      },
    ]
  ),
]
