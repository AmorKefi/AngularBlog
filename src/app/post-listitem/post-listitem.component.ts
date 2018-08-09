import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../Models/Post';

@Component({
  selector: 'app-post-listitem',
  templateUrl: './post-listitem.component.html',
  styleUrls: ['./post-listitem.component.scss']
})
export class PostListitemComponent implements OnInit {

  @Input() Post: Post;
  constructor() { }

  ngOnInit() {
  }

}
