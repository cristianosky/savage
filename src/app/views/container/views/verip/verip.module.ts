import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { VeripRoutingModule } from './verip-routing.module';
import { VeripComponent } from './verip.component';


@NgModule({
  declarations: [
    VeripComponent
  ],
  imports: [
    CommonModule,
    VeripRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class VeripModule { }
