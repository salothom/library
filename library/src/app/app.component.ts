import { Component } from '@angular/core';
import * as bookList from './myBooks.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'library';
  myBooks = bookList.Books;

}
