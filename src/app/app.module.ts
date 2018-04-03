import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule, TRANSLATIONS } from '@angular/core';

// import { registerLocaleData } from '@angular/common';
// import localeSi from '@angular/common/locales/si';
// import localeSiExtra from '@angular/common/locales/extra/si';

// registerLocaleData(localeSi, 'si', localeSiExtra);

declare const require; // Use the require method provided by webpack
const translations = require(`raw-loader!../locale/messages.en.xlf`);

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ { 
    provide: TRANSLATIONS,
    useFactory: (locale) => {
      locale = locale || 'en'; // default to english if no locale provided
      return require(`raw-loader!../locale/messages.${locale}.xlf`);
    },
    deps: [LOCALE_ID]  
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
