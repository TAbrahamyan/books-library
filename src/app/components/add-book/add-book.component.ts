import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { BooksService } from '../../services/books.service';
import { IBooks } from 'src/app/books';
import { CATEGORIES, ICategories } from 'src/app/categories';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: [ './add-book.component.scss' ]
})

export class AddBookComponent {
  years: string[] = [];
  categories: string[];
  bookForm = new FormGroup({
    bookName: new FormControl(''),
    authorName: new FormControl(''),
    pages: new FormControl(''),
    bookYear: new FormControl(''),
    bookCategory: new FormControl(''),
    downloadLink: new FormControl(''),
    buyLink: new FormControl(''),
    imageLink: new FormControl(''),
    description: new FormControl(''),
  });

  bookNameAlert: boolean = false;
  authorNameAlert: boolean = false;
  pagesCountAlert: boolean = false;
  bookYearAlert: boolean = false;
  bookCategoryAlert: boolean = false;
  downloadLinkAlert: boolean = false;
  buyLinkAlert: boolean = false;
  imageLinkAlert: boolean = false;
  descriptionAlert: boolean = false;

  constructor(
    private router: Router,
    private booksService: BooksService,
  ) {
    for (let i = 2021; i > 1900; i--) {
      this.years.push(`${i}`);
    }

    const bookCategory: any = CATEGORIES?.map((category: ICategories): string[] => category.subCategories);
    this.categories = bookCategory.flat();
  }

  stringValidation = (inputValue: string): RegExp[] => [ ...inputValue ].map(() => /[a-zA-Z ]/g);
  pagesValidation = (inputValue: string): RegExp[] => [ ...inputValue ].map(() => /\d/g);

  addBookHandler(): void {
    const {
      bookName,
      authorName,
      pages,
      bookYear,
      bookCategory,
      downloadLink,
      buyLink,
      imageLink,
      description,
    } = this.bookForm.value;

    if (!bookName.length) {
      this.bookNameAlert = true;
      return;
    }

    if (!authorName.length) {
      this.authorNameAlert = true;
      return;
    }

    if (pages.length >= 5 || !pages.length) {
      this.pagesCountAlert = true;
      return;
    }

    if (!bookYear.length) {
      this.bookYearAlert = true;
      return;
    }

    if (!bookCategory.length) {
      this.bookCategoryAlert = true;
      return;
    }

    if (!downloadLink.startsWith('https://bit.ly/')) {
      this.downloadLinkAlert = true;
      return;
    }

    if (!buyLink.startsWith('https://amzn.to/')) {
      this.buyLinkAlert = true;
      return;
    }

    if (!imageLink.startsWith('https://')) {
      this.imageLinkAlert = true;
      return;
    }

    if (description.length < 100) {
      this.descriptionAlert = true;
      return;
    }

    const newBook: IBooks = {
      name: bookName,
      author: authorName,
      year: bookYear,
      category: bookCategory,
      image: imageLink,
      pages,
      downloadLink,
      buyLink,
      description,
    };

    this.booksService.books.unshift(newBook);
    this.router.navigate(['/books']);
    localStorage.setItem('books', JSON.stringify(this.booksService.books));
  }
}
