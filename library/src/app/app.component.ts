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
  paddingNum = "7";
  textColor = "black";
  leftOffset = "22px";
  widthBook: String;
  fontfams = ['monospace', 'fantasy', 'cursive', 'sans-serif', 'sans-serif', 'serif', 'serif'];
  toggleCover=false;
  ngOnInit() {
    console.log("books", this.myBooks);
  }


  toggleBook(book){
    if(document.getElementById(book.title).style.display==="none"){
      document.getElementById(book.title).style.display="block";
      document.getElementById(book.author).style.display="none";
    }else{
      document.getElementById(book.title).style.display="none";
      document.getElementById(book.author).style.display="block";
    };

  }

  bigBook(book) {


    if (book.title.length > 25) {
      this.paddingNum = "17";
    } else if (book.pages < 300) {
      this.paddingNum = "9";
    } else if (book.pages < 400) {
      this.paddingNum = "11";
      console.log(book.pages, "hi");
    } else if (book.pages < 550) {
      this.paddingNum = "13";

    } else if (book.pages < 700) {
      this.paddingNum = "16";

    } else {
      console.log(book.pages, "hi")

      this.paddingNum = "18";
    }

    if (book.secondaryColor !== book.coverColor) {
      this.textColor = book.secondaryColor;
    }

    let styles = {
      'padding-top': this.paddingNum+'px',
      'padding-bottom': this.paddingNum+'px',

      // 'width':'80%',
      // 'background':book.coverColor
      'color': this.textColor
    }

    return styles

  }

  bookCover(book) {
    console.log("math", Math.random());

    this.leftOffset = String(Math.floor((Math.random() * 30) + 1)) + 'px';
    this.widthBook = String(92 - Math.floor((Math.random() * 10) + 1)) + "%";


    let styles = {
      'width': this.widthBook,
      'margin-left': this.leftOffset,
      "font-family": this.fontfams[Math.floor(Math.random() * this.fontfams.length)]
    }
    return styles


  }


}
