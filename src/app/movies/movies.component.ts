import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Array<Movie>;
  theatres: Array<Movie>;
  kids: Array<Movie>;
  drama: Array<Movie>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => { this.popular = data.results; console.log(this.popular); });
    this.moviesService.getTheatres().subscribe(data => this.theatres = data.results);
    this.moviesService.getKids().subscribe(data => this.kids = data.results);
    this.moviesService.getDrama().subscribe(data => this.drama = data.results);
  }

}
