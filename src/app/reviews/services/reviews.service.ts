import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Review } from '../interfaces/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  private readonly reviewsPath = '/reviews';
  constructor(private httpClient: HttpClient) {}

  public getReviews(): Observable<Review[]> {
    return this.httpClient.get<Review[]>(
      `${environment.apiBaseUrl}${this.reviewsPath}`
    );
  }

  public createReview(review: Review): Observable<Review> {
    return this.httpClient.post<Review>(
      `${environment.apiBaseUrl}${this.reviewsPath}`,
      review
    );
  }
}
