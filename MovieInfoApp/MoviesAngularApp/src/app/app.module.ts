import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MovieService } from './movie.service';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { UtilsModule } from "./utils/utils.module";

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieSearchComponent,
    MovieDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    UtilsModule,
    RouterModule.forRoot([
      { path: "", component: MovieSearchComponent },
      { path: "movie-detail", component: MovieDetailComponent },
      { path: "**", redirectTo: "/", pathMatch: "full" }
    ])
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
