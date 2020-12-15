import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  selector: 'rm-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  @Input() albums: Array<Album>;

  constructor() {}

  ngOnInit(): void {}

  public trackById(album: Album): string {
    return album.id;
  }
}
