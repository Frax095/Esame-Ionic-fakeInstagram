import { Component, OnInit } from '@angular/core';
import { PostsService, Post } from '../posts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public posts: Post[] = [];
  constructor (public postsService: PostsService){
  }

ngOnInit(){
  this.postsService.all().then(response => {
    this.posts = response;
    console.log(this.posts);
  });
}
}
