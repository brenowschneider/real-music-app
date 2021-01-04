import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../interfaces/review';

@Component({
  selector: 'rm-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})
export class ReviewListComponent implements OnInit {

  @Input() reviews: Array<Review>;

  constructor() {}

  ngOnInit(): void {}

  public trackById(review: Review): string {
    return review.id;
  }
}
