import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent {

  @Input() post: Post;

  onPostLike () {
    this.post.lovesIt++;
  }

  onPostDislike () {
    this.post.lovesIt--;
  }
}
