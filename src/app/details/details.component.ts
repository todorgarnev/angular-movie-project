import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myMovie: Object;

  constructor(private route: ActivatedRoute,
    private movieService: MoviesService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.movieService.getMovie(id).subscribe(data => this.myMovie = data);
    });
  }

}
