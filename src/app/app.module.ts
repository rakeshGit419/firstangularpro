import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NameDisplayComponent } from './name-display/name-display.component';
import { AgeDisplayComponent } from './age-display/age-display.component';

@NgModule({
  declarations: [
    AppComponent,
    NameDisplayComponent,
    AgeDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
