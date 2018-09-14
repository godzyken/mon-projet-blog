import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-premier-post',
  templateUrl: './mon-premier-post.component.html',
  styleUrls: ['./mon-premier-post.component.scss']
})
export class MonPremierPostComponent implements OnInit {

  post: {
    title: string,
    content: string,
    loveIts: number,
    created_at: Date
  };

  constructor() { }

  ngOnInit() {
  }

  // getLoveIt() {
  //   return this.post{loveIt};
  // }
}
