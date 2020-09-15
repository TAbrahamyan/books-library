import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksComponent } from './components/books/books.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { AddBookComponent } from './components/add-book/add-book.component';

const routes: Routes = [
  { path: 'books', component: BooksComponent },
  { path: 'book-detail/:name', component: BookDetailComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
