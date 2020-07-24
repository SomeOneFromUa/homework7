import {Component, Input, OnInit} from '@angular/core';
import {IPost} from '../../models/post.interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent implements OnInit {
@Input()
post: IPost;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openPost(post: IPost): void {
    this.router.navigate(['posts', post.id], { state: post});
  }
}
