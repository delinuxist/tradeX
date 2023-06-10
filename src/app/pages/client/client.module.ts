import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { TradingHistoryComponent } from './trading-history/trading-history.component';
import { ComponentsModule } from '../../shared/components/components.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ClientRouteModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { MatIconModule } from '@angular/material/icon';
import { NgApexchartsModule } from 'ng-apexcharts';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    DashboardComponent,
    PortfolioComponent,
    TradingHistoryComponent,
    ClientComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    MatIconModule,
    NgApexchartsModule,
    MatDialogModule,
  ],
  exports: [
    DashboardComponent,
    PortfolioComponent,
    TradingHistoryComponent,
    ClientRouteModule,
  ],
})
export class ClientModule {}
