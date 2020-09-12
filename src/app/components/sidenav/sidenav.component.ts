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

  switchModesHandler(): void {
    this.darkMode = !this.darkMode;
  }

  showCategoryListHandler(categoryIndex: number): void {
    this.categories?.map((category: ICategories, index: number) => {
      if (index === categoryIndex) {
        category.isShowSubCategories = !category?.isShowSubCategories;
      }
    });
  }
}
