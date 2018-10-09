import { Component, OnInit } from '@angular/core';
import { PostService } from '../_services/post.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'cs-post-list',
  templateUrl: './cs-post-list.component.html',
  styleUrls: ['./cs-post-list.component.css']
})
export class CsPostListComponent implements OnInit {
  posts: Array<any> = [];
  
  constructor(private postService : PostService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }

}
