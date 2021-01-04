import { Component, Input, OnInit } from '@angular/core';
import { Review } from '../interfaces/review';

@Component({
  selector: 'rm-review-item',
  templateUrl: './review-item.component.html',
  styleUrls: ['./review-item.component.css']
})
export class ReviewItemComponent implements OnInit {

  @Input() review: Review;

  constructor() { }

  ngOnInit(): void {
  }

}
