import { Component } from '@angular/core';
import { Post } from './models/post.model';
import * as firebase from 'firebase/app';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Angular Blog';

  constructor() {
    firebase.initializeApp(environment.firebaseConfig);
  }
}
