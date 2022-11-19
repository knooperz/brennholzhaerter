import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { BrennholzbestellungComponent } from './brennholzbestellung/brennholzbestellung.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { HolztransporteComponent } from './holztransporte/holztransporte.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    BrennholzbestellungComponent,
    StartseiteComponent,
    HolztransporteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
