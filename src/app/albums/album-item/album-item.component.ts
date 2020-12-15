import { Component, Input, OnInit } from '@angular/core';
import { Album } from '../interfaces/album';

@Component({
  selector: 'rm-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input() album: Album;

  constructor() { }

  ngOnInit(): void {
  }

}
