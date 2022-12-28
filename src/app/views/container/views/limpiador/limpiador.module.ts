import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LimpiadorRoutingModule } from './limpiador-routing.module';
import { LimpiadorComponent } from './limpiador.component';


@NgModule({
  declarations: [
    LimpiadorComponent
  ],
  imports: [
    CommonModule,
    LimpiadorRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class LimpiadorModule { }
