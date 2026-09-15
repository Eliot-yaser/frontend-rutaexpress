import { Routes } from '@angular/router';
import { AuditoriaPage } from './pages/auditoria/auditoria.page';
import { CatalogoPage } from './pages/catalogo/catalogo.page';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { ReportesPage } from './pages/reportes/reportes.page';
import { ShipmentsComponent } from './pages/shipments/shipments';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shipments', component: ShipmentsComponent },
  { path: 'catalogo', component: CatalogoPage },
  { path: 'reportes', component: ReportesPage },
  { path: 'auditoria', component: AuditoriaPage },
  { path: '**', redirectTo: 'dashboard' }
];