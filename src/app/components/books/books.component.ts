import { Component } from '@angular/core';

import { SidenavService } from '../..//services/sidenav.service';
import { BooksService } from '../..//services/books.service';
import { BOOKS } from '../..//books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ]
})

export class BooksListComponent {
  searchBook: string;

  constructor(
    public sidenavService: SidenavService,
    public booksService: BooksService,
  ) { }

  searchBookHandler(): void {
    this.booksService.books =
      BOOKS.filter((book: any) => book.category.toLowerCase().includes(this.searchBook.toLowerCase()));
  }
}
