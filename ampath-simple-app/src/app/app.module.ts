import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionnaireFormComponent } from './questionnaire-form/questionnaire-form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
