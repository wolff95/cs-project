import { Component, OnInit } from '@angular/core';
import { switchMap, map } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'cs-post-details',
  templateUrl: './cs-post-details.component.html',
  styleUrls: ['./cs-post-details.component.css']
})
export class CsPostDetailsComponent implements OnInit {
  post: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService
  ) {}

  ngOnInit() {
    this.postService.getPost(this.route.paramMap.source).subscribe(data => {
      this.post = data;
    });
  }

}
