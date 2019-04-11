import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BottomNavigatiognComponent } from './bottom-navigatiogn/bottom-navigatiogn.component';

@NgModule({
  declarations: [
    AppComponent,
    BottomNavigatiognComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
