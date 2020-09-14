import { Injectable } from '@angular/core';

import { BOOKS } from '../books';
import { IBooks } from '../interfaces';

@Injectable({ providedIn: 'root' })

export class BooksService {
  books: IBooks = BOOKS;
  opened: boolean = true;
}
