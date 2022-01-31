import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { MovieService } from '../movie.service';
import {  MovieDetail, Title } from "../movie.model";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movieDetail$!: Observable<MovieDetail>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieDetail$ = this.route.queryParams.pipe(
      map(queryParams => queryParams["movieId"]),
      switchMap(titleID => this.movieService.getMovieDetails(titleID)));
  }
}