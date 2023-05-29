import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TradingHistoryComponent } from './trading-history/trading-history.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    PortfolioComponent,
    TradingHistoryComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [DashboardComponent, PortfolioComponent],
})
export class PagesModule {}
