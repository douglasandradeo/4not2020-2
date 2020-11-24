import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './material/material.module';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    MainFooterComponent,
    MainToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
