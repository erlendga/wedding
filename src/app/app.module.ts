import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdSidenavModule } from "@angular/material";

import { AppComponent } from './app.component';
import { ContactDetailsComponent } from "./contacts/contact-details/contact-details.component";
import { ContactListComponent } from "./contacts/contact-list/contact-list.component";

@NgModule({
  declarations: [
    AppComponent,
    ContactDetailsComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
