import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumDetailsComponent } from './albums/album-details/album-details.component';
import { AlbumsComponent } from './albums/albums.component';
import { HomeComponent } from './home/home.component';
import { ReviewEditComponent } from './reviews/review-edit/review-edit.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailsComponent },
  // { path: 'reviews/:id', component: ReviewDetailsComponent },
  { path: 'reviews/:id/edit', component: ReviewEditComponent },
  { path: 'reviews/new', component: ReviewEditComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
