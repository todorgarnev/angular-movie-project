import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Object;
  theatres: Object;
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getPopular().subscribe(data => { this.popular = data.results; console.log(this.popular); });

    this.moviesService.getTheatres().subscribe(data => this.theatres = data.results);
  }

}
