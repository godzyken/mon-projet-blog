import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mon-projet-blog';
  isAuth = false;

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  onGetLike() {
    console.log('oh U like it bitch!');
  }
  onGetUnlike() {
    console.log('ahh U r uhgr soco-soco!!');
  }
}
