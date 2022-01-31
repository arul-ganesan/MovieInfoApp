import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Title } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent {

  query!: string;
  titles$!: Observable<Array<Title>>;

  constructor(private readonly movieService: MovieService) {}

  getSearchResults() {
    this.titles$ = this.movieService.getMoviesList(this.query);
  }

}
