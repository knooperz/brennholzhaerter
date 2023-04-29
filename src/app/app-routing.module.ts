import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrennholzbestellungComponent } from './brennholzbestellung/brennholzbestellung.component';
import { DienstleistungenComponent } from './dienstleistungen/dienstleistungen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { LayoutComponent } from './layout/layout.component';
import { ProduktComponent } from './produkt/produkt.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:
      [
        { path: '', component: StartseiteComponent },
        { path: 'brennholzbestellung', component: BrennholzbestellungComponent },
        { path: 'dienstleistungen/produkt', component: ProduktComponent },
        { path: 'ueberuns', component: AboutUsComponent },
        { path: 'dienstleistungen', component: DienstleistungenComponent},
        { path: 'kontakt', component: KontaktComponent},
        { path: 'impressum', component: ImpressumComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
