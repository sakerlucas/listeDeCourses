import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { ListComponent } from './list/list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstCharUpperCasePipe } from './pipes/first-char-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    ListComponent,
    FirstCharUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent, TitleComponent, ListComponent]
})
export class AppModule { }
