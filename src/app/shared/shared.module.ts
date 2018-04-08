import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatTableModule],
  exports: [MatToolbarModule, MatButtonModule, MatTableModule],
  declarations: []
})
export class SharedModule {}
