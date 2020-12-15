import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
