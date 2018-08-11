// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Route } from '@angular/router';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MoviesService } from './services/movies.service';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { DetailsComponent } from './details/details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    DetailsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: MoviesComponent },
      { path: 'movie/:id', component: DetailsComponent },
      { path: 'about', component: AboutComponent },
    ])
  ],
  providers: [
    MoviesService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
