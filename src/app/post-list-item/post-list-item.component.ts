import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {
  @Input() post: Post;

  constructor(private postsService: PostsService) {}

  onPostLike() {
    // console.log(this.post.createdAt);
    this.postsService.likePost(this.post);
  }

  onPostDislike() {
    this.postsService.disLikePost(this.post);
  }

  onRemovePost() {
    if (confirm('Êtes vous sûr ?')) {
      this.postsService.removePost(this.post);
    }
  }
}
