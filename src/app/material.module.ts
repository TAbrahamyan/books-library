import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatPaginatorModule,
  ],
})

export class MaterialModule { }
