import { Component, OnInit } from '@angular/core';
import {IPost} from '../../models/post.interface';
import {ActivatedRoute, Router} from '@angular/router';
import {IComment} from '../../models/comment.interface';
import {CommentsService} from '../../services/comments.service';

@Component({
  selector: 'app-single-post-page',
  templateUrl: './single-post-page.component.html',
  styleUrls: ['./single-post-page.component.css']
})
export class SinglePostPageComponent implements OnInit {
post: IPost;
comments: IComment[];
  toogle = false;
  constructor(private activatedRoute: ActivatedRoute, private router: Router, private commetnService: CommentsService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => this.post = history.state);
    if (!!this.post.id === false) {
      this.router.navigate(['posts']);
    }
  }

  showComments(): void {
    this.toogle = true;
    this.commetnService.getComments(this.post.id).subscribe(value => this.comments = value);
  }
}
