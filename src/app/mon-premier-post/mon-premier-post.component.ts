import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-mon-premier-post',
  templateUrl: './mon-premier-post.component.html',
  styleUrls: ['./mon-premier-post.component.scss']
})
export class MonPremierPostComponent implements OnInit {

  @Input() titleBean: string;
  @Input() contentBean: string;
  @Input() loveItsBean: number;
  @Input() createdAtBean: string;

  constructor() { }

  ngOnInit() {
  }

}

