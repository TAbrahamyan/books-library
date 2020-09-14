import { Component, OnInit } from '@angular/core';
import { SidenavService } from './services/sidenav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  constructor(private sidenavService: SidenavService) { }

  ngOnInit(): void {
    const savedMode = JSON.parse(localStorage.getItem('mode'));

    if (savedMode) {
      this.sidenavService.darkMode = savedMode;
    }
  }
}
