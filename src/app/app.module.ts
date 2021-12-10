import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShizuokaComponent } from './shizuoka/shizuoka.component';
import { KumamotoComponent } from './kumamoto/kumamoto.component';
import { MieComponent } from './mie/mie.component';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

const routes:Routes = [
  { path: 'Shizuoka', component: ShizuokaComponent },
  { path: 'Kumamoto', component: KumamotoComponent },
  { path: 'Mie', component: MieComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ShizuokaComponent,
    KumamotoComponent,
    MieComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
