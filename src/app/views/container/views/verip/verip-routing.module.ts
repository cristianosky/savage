import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeripComponent } from './verip.component';

const routes: Routes = [{ path: '', component: VeripComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VeripRoutingModule { }
