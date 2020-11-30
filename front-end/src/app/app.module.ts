import { NgxMaskModule, IConfig } from 'ngx-mask'
 
export const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Habilitar formatação de moeda e data em português
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
registerLocaleData(localePt);

import { MatMomentDateModule, MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainToolbarComponent } from './ui/main-toolbar/main-toolbar.component';
import { MainFooterComponent } from './ui/main-footer/main-footer.component';
import { MainMenuComponent } from './ui/main-menu/main-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EventoListComponent } from './evento/evento-list/evento-list.component';
import { EventoFormComponent } from './evento/evento-form/evento-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    MainFooterComponent,
    MainMenuComponent,
    EventoListComponent,
    EventoFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    MatMomentDateModule,
    BrowserModule,
    NgxMaskModule.forRoot()
  ],
  providers: [
    /**** Datas em português no MatDatepicker  ****/
    //{ provide: MAT_DATE_LOCALE, useValue: 'pt-BR' }//,
    //{ provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
    //{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: {useUtc: true}}
    /**********************************************/
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }