import { Component, OnInit } from '@angular/core';
import { Review } from './interfaces/review';
import { ReviewsService } from './services/reviews.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  constructor(private reviewsService: ReviewsService) { }

  public reviews = new Array<Review>();

  ngOnInit(): void {
    this.reviewsService.getReviews().subscribe(reviews => {
      this.reviews = reviews;
    });
  }

}
