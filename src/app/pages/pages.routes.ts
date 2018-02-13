import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

const pagesRoutes: Routes = [
  {
    path: '', // ruta vacia redirecciona a pagecomponent
    component: PagesComponent,
    children: [
      // el cual tiene hijos que son dashboard,progress,graficas1
      { path: 'dashboard', component: DashboardComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'graficas1', component: Graficas1Component },
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // si el path es vacio redirecciona al dashboard
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );
// RUTAS DENTRO DE OTRAS RUTAS ES DECIR ROUTER-OUTLETS DENTRO DE OTROS ROUTER-OUTLETS
