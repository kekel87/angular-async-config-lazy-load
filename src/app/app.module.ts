import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ConfigResolver } from './config.resolver';

@NgModule({
  imports:      [BrowserModule, AppRoutingModule],
  declarations: [AppComponent],
  bootstrap:    [AppComponent],
  providers: [ConfigResolver]
})
export class AppModule { }
