import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { title } from 'process';
import { map } from 'rxjs/operators';
import { AlbumsApiService } from 'src/app/albums/services/albums-api.service';
import { Review } from '../interfaces/review';
import { ReviewsService } from '../services/reviews.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.css'],
})
export class ReviewEditComponent implements OnInit {
  public newReviewForm: FormGroup;

  public albums: Array<{ id: string; value: string }>;

  constructor(
    private formBuilder: FormBuilder,
    private albumsApiService: AlbumsApiService,
    private reviewsService: ReviewsService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.populateAlbumsList();
  }

  private async populateAlbumsList(): Promise<void> {
    this.albumsApiService
      .getAlbums()
      .pipe(
        map((albums) =>
          albums.map((album) => {
            return { id: album.id, value: `${album.author} - ${album.title}` };
          })
        )
      )
      .subscribe((albums) => {
        this.albums = albums;
      });
  }

  private initializeForm(): void {
    this.newReviewForm = this.formBuilder.group({
      album: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      score: ['', [Validators.min(0), Validators.max(5)]],
    });
  }

  public onSubmit(): void {
    console.log(this.newReviewForm?.value);
    this.reviewsService
      .createReview(this.buildCreateReviewObject(this.newReviewForm?.value))
      .subscribe();
  }

  private buildCreateReviewObject(value: any): Review {
    return {
      description: value.description,
      title: value.title,
      albumId: +value.album,
      score: +value.score,
      id: '0',
    };
  }
}
