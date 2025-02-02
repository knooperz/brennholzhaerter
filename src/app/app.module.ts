import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { BrennholzbestellungComponent } from './brennholzbestellung/brennholzbestellung.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProduktComponent } from './produkt/produkt.component';
import { DienstleistungenComponent } from './dienstleistungen/dienstleistungen.component';
import { PulseButtonComponent } from './pulse-button/pulse-button.component';
import { KontaktComponent } from './kontakt/kontakt.component';

import {NgcCookieConsentModule, NgcCookieConsentConfig} from 'ngx-cookieconsent';
import { ImpressumComponent } from './impressum/impressum.component';
import { StammholzComponent } from './stammholz/stammholz.component';
import {TextFieldModule} from '@angular/cdk/text-field';

// import {enableProdMode} from '@angular/core';
// enableProdMode();

const cookieConfig:NgcCookieConsentConfig = {
  "cookie": {
    "domain": "localhost"
  },
  "position": "bottom-right",
  "theme": "classic",
  "palette": {
    "popup": {
      "background": "#97c511",
      "text": "#000000",
      "link": "#ffffff"
    },
    "button": {
      "background": "#0c276a",
      "text": "#000000",
      "border": "transparent"
    }
  },
  "type": "info",
  "content": {
    "message": "Diese Webseite verwendet Cookies. ",
    "dismiss": "OK",
    "deny": "Refuse cookies",
    "link": "Mehr",
    "href": "https://cookiesandyou.com",
    "policy": "Cookie Policy"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BrennholzbestellungComponent,
    StartseiteComponent,
    AboutUsComponent,
    ProduktComponent,
    PulseButtonComponent,
    DienstleistungenComponent,
    KontaktComponent,
    ImpressumComponent,
    StammholzComponent,
  ],
  imports: [
    NgcCookieConsentModule.forRoot(cookieConfig),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    TextFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
