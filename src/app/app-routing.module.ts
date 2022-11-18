import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrennholzbestellungComponent } from './brennholzbestellung/brennholzbestellung.component';
import { LayoutComponent } from './layout/layout.component';
import { StartseiteComponent } from './startseite/startseite.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children:
    [
      { path: '', component: StartseiteComponent },
      { path: 'brennholzbestellung', component: BrennholzbestellungComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
