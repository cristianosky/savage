import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';

const routes: Routes = [
  { path: '', component: ContainerComponent, children : [
    { path: '', loadChildren: () => import('./views/inicio/inicio.module').then(m => m.InicioModule) },

    { path: 'generador', loadChildren: () => import('./views/generador/generador.module').then(m => m.GeneradorModule) },

    { path: 'limpiador', loadChildren: () => import('./views/limpiador/limpiador.module').then(m => m.LimpiadorModule) },

    { path: 'verip', loadChildren: () => import('./views/verip/verip.module').then(m => m.VeripModule) },

    { path: 'informacion', loadChildren: () => import('./views/informacion/informacion.module').then(m => m.InformacionModule) }
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
