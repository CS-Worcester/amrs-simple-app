import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatTabsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
import { MatCheckboxModule} from '@angular/material';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ReactiveFormsModule} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { IgxAvatarModule, IgxIconModule, IgxListModule, IgxBottomNavModule } from 'igniteui-angular';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    TabsComponent,
    BottomNavigationComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxListModule,
    IgxBottomNavModule,
    
  ],
  providers: [
    MatNativeDateModule,
  ],
})
export class AppModule { }

