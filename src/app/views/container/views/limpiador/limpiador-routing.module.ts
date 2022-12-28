import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LimpiadorComponent } from './limpiador.component';

const routes: Routes = [{ path: '', component: LimpiadorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LimpiadorRoutingModule { }
