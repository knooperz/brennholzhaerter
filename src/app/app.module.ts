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

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BrennholzbestellungComponent,
    StartseiteComponent,
    AboutUsComponent,
    ProduktComponent,
    DienstleistungenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
