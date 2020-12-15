import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HomeComponent } from './home/home.component';
import { AlbumItemComponent } from './albums/album-item/album-item.component';
import { AlbumListComponent } from './albums/album-list/album-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AlbumsComponent,
    ReviewsComponent,
    HomeComponent,
    AlbumItemComponent,
    AlbumListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
