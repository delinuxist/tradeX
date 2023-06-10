import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { TradesComponent } from './trades/trades.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ComponentsModule } from '../../shared/components/components.module';
import { ExchangeComponent } from './exchange/exchange.component';
import { AdminRouteModule } from './admin-routing.module';
import { CancelledTradesComponent } from './trades/cancelled-trades/cancelled-trades.component';
import { FailedTradesComponent } from './trades/failed-trades/failed-trades.component';
import { SuccessfulTradesComponent } from './trades/successful-trades/successful-trades.component';
import { UsersComponent } from './customers/users/users.component';
import { AdminsComponent } from './customers/admins/admins.component';
import { LogsComponent } from './logs/logs.component';
import { UsersLogsComponent } from './logs/users-logs/users-logs.component';
import { AdminsLogsComponent } from './logs/admins-logs/admins-logs.component';

@NgModule({
  declarations: [
    AdminComponent,
    TradesComponent,
    CustomersComponent,
    ExchangeComponent,
    CancelledTradesComponent,
    FailedTradesComponent,
    SuccessfulTradesComponent,
    UsersComponent,
    AdminsComponent,
    LogsComponent,
    UsersLogsComponent,
    AdminsLogsComponent,
  ],
  imports: [CommonModule, RouterModule, SharedModule, ComponentsModule],
  exports: [
    AdminComponent,
    ExchangeComponent,
    TradesComponent,
    CustomersComponent,
    AdminRouteModule,
    CancelledTradesComponent,
    FailedTradesComponent,
    SuccessfulTradesComponent,
    LogsComponent,
    UsersLogsComponent,
    AdminsLogsComponent
  ],
})
export class AdminModule {}
