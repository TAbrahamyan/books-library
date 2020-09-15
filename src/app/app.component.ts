import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from './categories';

import { BooksService } from './services/books.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    const savedMode = JSON.parse(localStorage.getItem('mode'));

    if (savedMode) {
      this.booksService.darkMode = savedMode;
    }
  }
}
