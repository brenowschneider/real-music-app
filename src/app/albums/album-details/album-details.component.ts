import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumDetails } from '../interfaces/album-details';
import { AlbumsApiService } from '../services/albums-api.service';

@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.css'],
})
export class AlbumDetailsComponent implements OnInit {
  album: AlbumDetails;

  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumsApiService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const id = +params.id;
      this.albumService.getAlbum(id).subscribe((albumDetails) => {
        this.album = albumDetails;
      });
    });
  }
}
