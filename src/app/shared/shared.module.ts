import { MaterialModule } from './material.module';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    MaterialModule
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
