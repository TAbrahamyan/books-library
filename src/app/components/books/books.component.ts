import { Component } from '@angular/core';

import { BooksService } from '../../services/books.service';
import { BOOKS, IBooks } from '../../books';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ]
})

export class BooksComponent {
  pageIndex: number = 0;
  lowValue: number = 0;
  highValue: number = 8;
  pageSize: number = Math.ceil(this.booksService.books.length / this.highValue);

  constructor(public booksService: BooksService) { }

  getPaginatorData(event: PageEvent): void {
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue =  this.highValue + this.pageSize;
    }

    if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue =  this.highValue - this.pageSize;
    }

    this.pageIndex = event.pageIndex;
  }

  searchBookHandler(): void {
    const { searchBook, subCategoriesText }: BooksService = this.booksService;

    this.booksService.books = BOOKS.filter(({ name, category }: IBooks): string => {
      if (category.toLowerCase() === subCategoriesText.toLowerCase() || subCategoriesText === 'All') {
        return name.toLowerCase().includes(searchBook.value.toLowerCase());
      }
    });
  }

  navigateByBookName = (bookName: string): string => bookName.replace(/[ ]/g, '_');
}
