import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Movies } from '../models/movies';

const apiKey = '782e779226153bf82c7ff0b9345fc3c2';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: String = 'https://api.themoviedb.org/3';
  popular: String = '/discover/movie?sort_by=popularity.desc';
  theatres: String = '/discover/movie?primary_release_date.gte=2018-08-01&primary_release_date.lte=2018-08-11';
  kids: String = '/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
  drama: String = '/discover/movie?with_genres=18&primary_release_year=2018';
  movie: String = '/movie/';
  authentication: String = '&api_key=';
  movieAuth: String = '?api_key=';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getTheatres(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.theatres}${this.authentication}${apiKey}`);
  }

  getKids(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.kids}${this.authentication}${apiKey}`);
  }

  getDrama(): Observable<Movies> {
    return this.http.get<Movies>(`${this.path}${this.drama}${this.authentication}${apiKey}`);
  }

  getMovie(id) {
    return this.http.get(`${this.path}${this.movie}` + id + `${this.movieAuth}${apiKey}`);
  }

  findAMovie(data) {
    return this.http.get(`https://api.themoviedb.org/3/search/movie?query=${data}${this.authentication}${apiKey}`);
  }

}
