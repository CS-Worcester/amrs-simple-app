import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { IgxAvatarModule, IgxIconModule, IgxListModule, IgxBottomNavModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    BottomNavigationComponent
  ],
  imports: [
    BrowserModule,
    IgxAvatarModule,
    IgxIconModule,
    IgxListModule,
    IgxBottomNavModule,
    BrowserAnimationsModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {
}
