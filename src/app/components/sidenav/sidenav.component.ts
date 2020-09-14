import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { BOOKS } from '../../books';
import { CATEGORIES, ICategories } from '../../categories';
import { BooksService } from '../../services/books.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})

export class SidenavComponent implements OnInit {
  categories: ICategories[] = CATEGORIES;
  sidenavMode: string;
  darkModeIcon: string = '../../../assets/images/dark_mode.png';
  lightModeIcon: string = '../../../assets/images/light_mode.png';
  darkModeBook: string = '../../../assets/images/dark_mode_book.png';
  lightModeBook: string = '../../../assets/images/book.png';

  constructor(
    public booksService: BooksService,
    public breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit(): void {
    this.breakpointObserver
      .observe(['(min-width: 900px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.booksService.opened = true;
          this.sidenavMode = 'side';
        } else {
          this.booksService.opened = false;
          this.sidenavMode = 'push';
        }
      });
  }

  switchModesHandler(): void {
    this.booksService.darkMode = !this.booksService.darkMode;
    localStorage.setItem('mode', JSON.stringify(this.booksService.darkMode));
  }

  allBooksHandler(): void {
    this.booksService.subCategoriesText = 'All';
    this.booksService.books = BOOKS;
    this.categories?.map((category: ICategories) => category.showSubCategories = false);
  }

  subCategoriesHandler(categoryItem: string): void {
    this.booksService.searchBook = new FormControl('');
    this.booksService.subCategoriesText = categoryItem;
    this.booksService.books = BOOKS.filter((book: any) => book.category.toLowerCase() === categoryItem.toLowerCase());
  }

  showCategoryListHandler(categoryIndex: number): void {
    this.categories?.map((category: ICategories, index: number) => {
      if (index === categoryIndex) {
        category.showSubCategories = !category?.showSubCategories;
      }
    });
  }
}
