import { RouterModule, Routes } from '@angular/router';
import { PortfolioDetailsComponent } from '../../shared/components/portfolio-details/portfolio-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradingHistoryComponent } from './trading-history/trading-history.component';
import { NgModule } from '@angular/core';
import { ClientComponent } from './client.component';
import { AuthGuard } from '../../core/guards/auth.guard';

const routes: Routes = [
  {
    path: 'client',
    component: ClientComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'portfolio',
        component: PortfolioComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'trade-history',
        component: TradingHistoryComponent,
        // canActivate: [AuthGuard],
      },
      {
        path: 'portfolio-details/:portfolioId',
        component: PortfolioDetailsComponent,
        // canActivate: [AuthGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientRouteModule {}
