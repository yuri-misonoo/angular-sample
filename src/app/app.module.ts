import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShizuokaComponent } from './shizuoka/shizuoka.component';
import { KumamotoComponent } from './kumamoto/kumamoto.component';
import { MieComponent } from './mie/mie.component';

@NgModule({
  declarations: [
    AppComponent,
    ShizuokaComponent,
    KumamotoComponent,
    MieComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
