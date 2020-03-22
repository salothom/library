import { Component, OnInit } from '@angular/core';
import * as bookList from './myBooks.json';
import { formatNumber } from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'library';
  myBooks = bookList.Books;

  toggleCover = false;
  ngOnInit() {
    // console.log("books", this.myBooks);
  }

  toggleBook(book) {
    if (document.getElementById(book.title).style.display === "none") {
      document.getElementById(book.title).style.display = "block";
      document.getElementById(book.author).style.display = "none";
    } else {
      document.getElementById(book.title).style.display = "none";
      document.getElementById(book.author).style.display = "block";
    };

  }
}
