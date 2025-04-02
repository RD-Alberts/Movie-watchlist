export interface Movie {
    Title: string;
    Plot: string;
    Poster: string;
    Year: string;
    Rated: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Language: string;
    Country: string;
    Awards: string;
    imdbID: string;
    Ratings: {
      Source: string;
      Value: string;
    }[];
    [key: string]: any;
  }
  