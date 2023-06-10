import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './pages/client/client.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginComponent } from './pages/auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'client',
    redirectTo: 'client/dashboard',
    pathMatch: 'full',
    // canActivate: [AuthGuard],
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'admin',
    redirectTo: 'admin/trades',
    pathMatch: 'full',
  },
  {
    path: 'admin/customers',
    redirectTo: 'admin/customers/users',
    pathMatch: 'full',
  },
  {
    path: 'admin/logs',
    redirectTo: 'admin/logs/users-logs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
