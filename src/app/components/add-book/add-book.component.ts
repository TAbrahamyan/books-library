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

  constructor(
    private router: Router,
    private booksService: BooksService,
  ) {
    for (let i = 2021; i > 1900; i--) {
      this.years.push(`${i}`);
    }

    const res: any = CATEGORIES?.map((category: ICategories) => category.subCategories);
    this.categories = res.flat();
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

    if (
      !(bookName && authorName && pages && bookYear && bookCategory && downloadLink && buyLink && imageLink && description).length
      || description.length < 100
    ) {
      return;
    }

    if (!imageLink.startsWith('https://')) {
      alert('Invalid image url');

      return;
    }

    if (!downloadLink.startsWith('https://bit.ly/')) {
      alert('Download link should start with https://bit.ly/');

      return;
    }

    if (!buyLink.startsWith('https://amzn.to/')) {
      alert('buyLink link should start with https://amzn.to/');

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
  }
}
