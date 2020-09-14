import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })

export class SidenavService {
  darkMode: boolean = false;
  subCategoriesText: string = 'All';
}
