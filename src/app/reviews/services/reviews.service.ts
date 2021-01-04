import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private readonly albumsPath = '/reviews';
  constructor(private httpClient: HttpClient) {}

  public createReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(
      `${environment.apiBaseUrl}${this.albumsPath}`,
      review
    );
  }
}
