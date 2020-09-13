import { Component } from '@angular/core';

import { SidenavService } from 'src/app/services/sidenav.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: [ './books.component.scss' ]
})

export class BooksListComponent {
  constructor(public sidenavService: SidenavService) { }
}
