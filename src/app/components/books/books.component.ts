import { Component, OnInit } from '@angular/core';

import { SidenavService } from '../../services/sidenav.service';
import { BooksService } from '../../services/books.service';
import { BOOKS } from '../../books';
import { IBooks } from '../../interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ]
})

export class BooksComponent {
  searchBook: string;

  constructor(
    public sidenavService: SidenavService,
    public booksService: BooksService,
  ) { }

  searchBookHandler(): void {
    this.booksService.books = BOOKS.filter((book: IBooks) => book.category.toLowerCase().includes(this.searchBook.toLowerCase()));
  }

  navigationName = (name: string): string => name.replace(/[ ]/g, '_');
}
