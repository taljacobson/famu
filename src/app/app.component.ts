import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  counter = 0;
  ngOnInit() {
    if (typeof window !== 'undefined') {
      firebase.database().ref('counter').once('value', (e) => {
        console.log(e.val());
        this.counter = e.val();
      });
    }
  }

  incNum() {
    this.counter++;
    firebase.database().ref('counter').set(this.counter);
  }
}
