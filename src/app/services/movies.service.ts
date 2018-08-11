import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

const apiKey = '782e779226153bf82c7ff0b9345fc3c2';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  path: String = 'https://api.themoviedb.org/3';
  popular: String = '/discover/movie?sort_by=popularity.desc';
  theatres: String = '/discover/movie?primary_release_date.gte=2018-08-01&primary_release_date.lte=2018-08-11';
  authentication: String = '&api_key=';

  constructor(private http: HttpClient) { }

  getPopular(): Observable<Object> {
    return this.http.get(`${this.path}${this.popular}${this.authentication}${apiKey}`);
  }

  getTheatres(): Observable<Object> {
    return this.http.get(`${this.path}${this.theatres}${this.authentication}${apiKey}`);
  }
}
