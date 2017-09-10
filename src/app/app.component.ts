import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Post } from './models/post.model';
import * as PostActions from './actions/post.actions';
import * as firebase from 'firebase';

interface AppState {
  message: string;
  post: Post;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message$: Observable<string>;
  counter = 0;

  post: Observable<Post>;
  text: string; /// form input val.
  constructor(private store: Store<AppState>) {
    this.message$ = this.store.select('message');
    this.post = this.store.select('post');
    
  }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      firebase.database().ref('counter').once('value', (e) => {
        console.log(e.val());
        this.counter = e.val();
      });
    }
  }

  editText() {
    this.store.dispatch(new PostActions.EditText(this.text));
  }

  resetPost() {
    this.store.dispatch(new PostActions.Reset());
  }

  upvote() {
    this.store.dispatch(new PostActions.Upvote());
  }

  downvote() {
    this.store.dispatch(new PostActions.Downvote());
  }

  incNum() {
    this.counter++;
    firebase.database().ref('counter').set(this.counter);
  }

  hebrewMessage() {
    this.store.dispatch({type: 'HEBREW'});
  }
}
