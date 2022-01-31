import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/observable';
import { MovieDetail, Title } from './movie.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private readonly moviesAPIURL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  getMoviesList(id:string):Observable<Array<Title>> {
    return this.http.get<Array<Title>>(this.moviesAPIURL + '/Titles/GetTitles' + ((id === undefined || id.length === 0) ?  '' :('/'+id)));
  }

  getMovieDetails(titleId: string): Observable<MovieDetail> {
    return this.http.get<MovieDetail>(this.moviesAPIURL + '/Titles/GetTitleInfo' + ((titleId === undefined || titleId.length === 0) ?  '' :('/'+titleId)));
  }

}
