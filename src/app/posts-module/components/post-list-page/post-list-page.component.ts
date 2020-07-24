import { Component, OnInit } from '@angular/core';
import {IPost} from '../../models/post.interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-post-list-page',
  templateUrl: './post-list-page.component.html',
  styleUrls: ['./post-list-page.component.css']
})
export class PostListPageComponent implements OnInit {
posts: IPost[];
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(value => this.posts = value.posts);
  }

}
