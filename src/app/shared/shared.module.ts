import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatTableModule,
  MatToolbarModule
} from '@angular/material';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  imports: [
    CommonModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatTableModule, MatDialogModule],
  declarations: []
})
export class SharedModule {}
