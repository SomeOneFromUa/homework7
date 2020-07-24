import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PostListPageComponent } from './components/post-list-page/post-list-page.component';
import {PostService} from './services/post.service';
import {PostResolveService} from './services/post-resolve.service';
import { PostCardComponent } from './components/post-card/post-card.component';
import {MatCardModule} from '@angular/material/card';
import {PostPageComponent} from './components/posts-page/post-page.component';
import { SinglePostPageComponent } from './components/single-post-page/single-post-page.component';
import {CommentsService} from './services/comments.service';
import { CommentComponent } from './components/comment/comment.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';



const routes: Routes = [
  {
    path: '', component: PostPageComponent , children: [
      {path: '', component: PostListPageComponent, resolve: {posts: PostResolveService}},
      {path: ':id', component: SinglePostPageComponent}
    ]
  },
];

@NgModule({
  declarations: [PostListPageComponent, PostCardComponent, PostPageComponent, SinglePostPageComponent, CommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatButtonToggleModule
  ],
  providers: [PostService, PostResolveService, CommentsService]
})
export class PostsModule { }
