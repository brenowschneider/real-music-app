import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Album } from '../interfaces/album';
import { AlbumDetails } from '../interfaces/album-details';

@Injectable({
  providedIn: 'root',
})
export class AlbumsApiService {
  constructor(private httpClient: HttpClient) {}

  private readonly albumsPath = '/albums';

  public getAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>(
      `${environment.apiBaseUrl}${this.albumsPath}`
    );
  }

  public getAlbum(id: number): Observable<AlbumDetails> {
    return this.httpClient.get<AlbumDetails>(
      `${environment.apiBaseUrl}${this.albumsPath}/${id}`
    );
  }
}
