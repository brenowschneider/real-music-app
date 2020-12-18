import { Review } from '../../reviews/interfaces/review';
import { Album } from './album';

export interface AlbumDetails extends Album {
  reviews: Review[];
}
