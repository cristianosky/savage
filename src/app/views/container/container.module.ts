import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule
  ]
})
export class ContainerModule { }
