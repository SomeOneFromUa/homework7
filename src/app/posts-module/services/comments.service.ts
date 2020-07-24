import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IComment} from '../models/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private httpClient: HttpClient) { }
  getComments = (postID: number): Observable<IComment[]> => {
    return this.httpClient.get<IComment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${postID}`);
  }
}
