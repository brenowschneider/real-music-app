import { Component, OnInit } from '@angular/core';
import { Album } from './interfaces/album';
import { AlbumsApiService } from './services/albums-api.service';

@Component({
  selector: 'rm-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor(private albumsApiService: AlbumsApiService) { }

  public albums = new Array<Album>();

  ngOnInit(): void {
    this.albumsApiService.getAlbums().subscribe(album => {
      this.albums = album;
    });
  }

}
