import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
  {
    path: '', // ruta vacia redirecciona a pagecomponent
    component: PagesComponent,
    children: [ // el cual tiene hijos que son dashboard,progress,graficas1
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // si el path es vacio redirecciona al dashboard
    ]
 },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', pathMatch: 'full', component: NopagefoundComponent }
];

// @NgModule({
//   imports: [RouterModule.forChild(appRoutes)],
//   exports: [RouterModule],
// })
// export class DashBoardRoutingModule { }

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
