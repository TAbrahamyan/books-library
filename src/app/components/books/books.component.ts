import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BooksService } from '../../services/books.service';
import { BOOKS } from '../../books';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ]
})

export class BooksComponent {
  constructor(
    private router: Router,
    public booksService: BooksService,
  ) { }

  searchBookHandler(): void {
    const subCategories: string = this.booksService.subCategoriesText;
    this.booksService.books = BOOKS.filter(({ name, category }) => {
      if (category.toLowerCase() === subCategories.toLowerCase() || subCategories === 'All') {
        return name.toLowerCase().includes(this.booksService.searchBook.value.toLowerCase());
      }
    });
  }

  navigateToDetailsHandler(bookName: string): void {
    this.router.navigate(['/book-detail', bookName.replace(/[ ]/g, '_')]);
  }
}
