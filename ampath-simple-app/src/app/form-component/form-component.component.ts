import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
  }

  openCloseFormDialog(): void {
    this.dialogService.openCloseFormDialog();
  }


  
}
