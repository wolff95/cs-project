import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../_services/post.service';

@Component({
  selector: 'cs-post',
  templateUrl: './cs-post.component.html',
  styleUrls: ['./cs-post.component.css']
})
export class CsPostComponent implements OnInit {
  @Input() postObj: any;

  constructor(private postService: PostService) { }

  ngOnInit() {  }
}
