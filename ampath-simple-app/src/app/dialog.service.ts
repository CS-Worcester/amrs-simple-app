import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CloseFormDialogComponent } from './close-form-dialog/close-form-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openCloseFormDialog() {
    this.dialog.open(CloseFormDialogComponent, {
      width: '280px',
      height: '128px',
      disableClose: true
    });
  }
}
