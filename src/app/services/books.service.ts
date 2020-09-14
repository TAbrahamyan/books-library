import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

import { BOOKS, IBooks } from '../books';

@Injectable({ providedIn: 'root' })

export class BooksService {
  books: IBooks = BOOKS;
  searchBook: FormControl = new FormControl('');
  subCategoriesText: string = 'All';
  opened: boolean = true;
  darkMode: boolean = false;
}
