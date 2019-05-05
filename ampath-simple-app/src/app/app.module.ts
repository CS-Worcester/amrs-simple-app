import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/';
import { MatFormFieldModule } from '@angular/material/';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { CloseFormDialogComponent } from './close-form-dialog/close-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    CloseFormDialogComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CloseFormDialogComponent]
})
export class AppModule { }
