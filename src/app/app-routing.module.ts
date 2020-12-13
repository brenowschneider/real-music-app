import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { AlbumsComponent } from './albums/albums.component';
import { ReviewsComponent } from './reviews/reviews.component';



const routes: Routes = [
  { path: 'albums', component: AlbumsComponent },
  { path: 'reviews', component: ReviewsComponent },
];// sets up routes constant where you define your routes



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }