import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: [ './add-book.component.scss' ]
})

export class AddBookComponent implements OnInit {
  years: string[] = [];
  bookForm = new FormGroup({
    bookName: new FormControl(''),
    authorName: new FormControl(''),
    pages: new FormControl(''),
    bookYear: new FormControl(''),
    downloadLink: new FormControl(''),
    buyLink: new FormControl(''),
  });

  ngOnInit(): void {
    for (let i = 2021; i > 1990; i--) {
      this.years.push(`${i}`);
    }
  }
}
