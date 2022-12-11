import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BrennholzbestellungComponent } from './brennholzbestellung/brennholzbestellung.component';
import { LayoutComponent } from './layout/layout.component';
import { ProduktComponent } from './produkt/produkt.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:
      [
        { path: '', component: StartseiteComponent },
        { path: 'brennholzbestellung', component: BrennholzbestellungComponent },
        { path: 'produkt', component: ProduktComponent },
        { path: 'ueberuns', component: AboutUsComponent }

      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
