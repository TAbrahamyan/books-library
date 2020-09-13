import { Component } from '@angular/core';

import { CATEGORIES } from '../../categories';
import { ICategories } from '../../interfaces';
import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: [ './sidenav.component.scss' ]
})

export class SidenavComponent {
  categories: ICategories[] = CATEGORIES;
  darkMode: boolean = false;
  darkModeIcon: string = '../../../assets/images/dark_mode.png';
  lightModeIcon: string = '../../../assets/images/light_mode.png';
  darkModeBook: string = '../../../assets/images/dark_mode_book.png';
  lightModeBook: string = '../../../assets/images/book.png';

  constructor(public sidenavService: SidenavService) { }

  allBooksHandler(): void {
    this.sidenavService.subCategoriesText = 'All';
    this.categories?.map((category: ICategories) => category.showSubCategories = false);
  }

  subCategoriesHandler(categoryItem: string): void {
    this.sidenavService.subCategoriesText = categoryItem;
  }

  showCategoryListHandler(categoryIndex: number): void {
    this.categories?.map((category: ICategories, index: number) => {
      if (index === categoryIndex) {
        category.showSubCategories = !category?.showSubCategories;
      }
    });
  }
}
