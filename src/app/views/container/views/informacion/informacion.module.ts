import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { InformacionRoutingModule } from './informacion-routing.module';
import { InformacionComponent } from './informacion.component';


@NgModule({
  declarations: [
    InformacionComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class InformacionModule { }
