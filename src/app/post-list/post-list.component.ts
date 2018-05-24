import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post[];
  postsSubscription: Subscription;

  constructor(private postsService: PostsService) {}

  ngOnInit() {
    this.postsSubscription = this.postsService.postsSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postsService.loadPosts();
  }

  generatePosts() {
    this.postsService.generatePosts();
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }
}
