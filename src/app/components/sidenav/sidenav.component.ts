import { Component } from '@angular/core';

import { CATEGORIES } from '../../categories';
import { ICategories } from '../../interfaces';

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

  switchModesHandler(): void {
    this.darkMode = !this.darkMode;
  }

  allBooksHandler(): void {
    this.categories?.map((category: ICategories) => category.showSubCategories = false);
  }

  showCategoryListHandler(categoryIndex: number): void {
    this.categories?.map((category: ICategories, index: number) => {
      if (index === categoryIndex) {
        category.showSubCategories = !category?.showSubCategories;
      }
    });
  }
}
