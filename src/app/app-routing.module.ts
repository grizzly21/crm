import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthContainerComponent } from './auth/auth-container/auth-container.component';
import { authRouters } from './auth/auth-routing.module';
import { DashboardContainerComponent } from './dashboard/dashboard-container.component';
import { dashboardRoutes } from './dashboard/dashboard-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', component: AuthContainerComponent, children: authRouters },
  { path: 'dashboard', component: DashboardContainerComponent, children: dashboardRoutes},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
