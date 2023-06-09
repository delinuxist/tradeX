import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';

import { MatIconModule } from '@angular/material/icon';
import { TopNavComponent } from './top-nav/top-nav.component';
import { PortfolioTableComponent } from './portfolio-table/portfolio-table.component';
import { PortfolioDetailsComponent } from './portfolio-details/portfolio-details.component';
import { RouterModule } from '@angular/router';
import { StockCardComponent } from './stock-card/stock-card.component';
import { OrderTableComponent } from './order-table/order-table.component';
import { AdminSideNavComponent } from './admin-side-nav/admin-side-nav.component';
import { AdminTopNavComponent } from './admin-top-nav/admin-top-nav.component';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '@angular/forms';
import { AdminsLogsTableComponent } from './admins-logs-table/admins-logs-table.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { UpdatePortModalComponent } from './update-port-modal/update-port-modal.component'

@NgModule({
  declarations: [
    SideNavComponent,
    TopNavComponent,
    PortfolioTableComponent,
    PortfolioDetailsComponent,
    StockCardComponent,
    OrderTableComponent,
    AdminSideNavComponent,
    AdminTopNavComponent,
    ModalComponent,
    AdminsLogsTableComponent,
    CustomersTableComponent,
    UpdatePortModalComponent,
  ],
  imports: [CommonModule, MatIconModule, RouterModule, FormsModule,MatProgressBarModule],
  exports: [
    SideNavComponent,
    TopNavComponent,
    PortfolioTableComponent,
    PortfolioDetailsComponent,
    StockCardComponent,
    OrderTableComponent,
    AdminSideNavComponent,
    AdminTopNavComponent,
    AdminsLogsTableComponent,
    CustomersTableComponent,
    UpdatePortModalComponent
  ],
})
export class ComponentsModule {}
