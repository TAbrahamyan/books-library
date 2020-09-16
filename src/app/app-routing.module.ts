import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'books', loadChildren: () => import('./components/books/books.module').then(m => m.BooksModule) },
  { path: 'book-detail/:name', loadChildren: () => import('./components/book-detail/book-detail.module').then(m => m.BookDetailModule) },
  { path: 'add-book', loadChildren: () => import('./components/add-book/add-book.module').then(m => m.AddBookModule) },
  { path: '', redirectTo: '/books', pathMatch: 'full' },
  { path: '**', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
})

export class AppRoutingModule { }
