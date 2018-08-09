import { Component, OnInit } from '@angular/core';
import { Post } from './Models/Post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  Posts: Post[] = [
    { 'title': 'Mon premier post',
      'content': 'loremUpsum test',
      'loveIts': 10,
      'created_at': new Date('07/20/2018')
    },
    { 'title': 'Mon Deuxiéme post',
      'content': 'loremUpsum test',
      'loveIts': -5,
      'created_at': new Date('07/28/2018')
    },
    { 'title': 'Encore un post',
      'content': 'loremUpsum test',
      'loveIts': 20,
      'created_at': new Date('08/08/2018')
    }
  ];
  constructor() {

  }
  ngOnInit(): void {

  }

}
