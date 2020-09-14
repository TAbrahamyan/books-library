import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

import { BOOKS } from '../../books';
import { CATEGORIES } from '../../categories';
import { ICategories } from '../../interfaces';
import { SidenavService } from '../../services/sidenav.service';
import { BooksService } from '../../services/books.service';

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
    public sidenavService: SidenavService,
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
    this.sidenavService.darkMode = !this.sidenavService.darkMode;
    localStorage.setItem('mode', JSON.stringify(this.sidenavService.darkMode));
  }

  allBooksHandler(): void {
    this.sidenavService.subCategoriesText = 'All';
    this.categories?.map((category: ICategories) => category.showSubCategories = false);
    this.booksService.books = BOOKS;
  }

  subCategoriesHandler(categoryItem: string): void {
    this.sidenavService.subCategoriesText = categoryItem;
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
