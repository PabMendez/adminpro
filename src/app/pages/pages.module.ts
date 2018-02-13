import { NgModule } from '@angular/core';

// RUTAS
import { PAGES_ROUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    exports: [
// estos componentes podrian ser accesados desde fuera de la carpeta pages por eso es necesario exportarlas
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})

export class PagesModule {}
