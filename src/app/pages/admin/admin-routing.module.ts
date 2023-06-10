import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TradesComponent } from './trades/trades.component';
import { CustomersComponent } from './customers/customers.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { OpenTradesComponent } from './trades/open-trades/open-trades.component';
import { CancelledTradesComponent } from './trades/cancelled-trades/cancelled-trades.component';
import { FailedTradesComponent } from './trades/failed-trades/failed-trades.component';
import { SuccessfulTradesComponent } from './trades/successful-trades/successful-trades.component';
import { UsersComponent } from './customers/users/users.component';
import { AdminsComponent } from './customers/admins/admins.component';
import { LogsComponent } from './logs/logs.component';
import { AdminsLogsComponent } from './logs/admins-logs/admins-logs.component';
import { UsersLogsComponent } from './logs/users-logs/users-logs.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {
        path: 'trades',
        component: TradesComponent,
        children: [
          {
            path: 'open-trades',
            component: OpenTradesComponent,
          },
          {
            path: 'cancelled-trades',
            component: CancelledTradesComponent,
          },
          {
            path: 'failed-trades',
            component: FailedTradesComponent,
          },
          {
            path: 'successful-trades',
            component: SuccessfulTradesComponent,
          },
        ],
      },
      {
        path: 'customers',
        component: CustomersComponent,
        children: [
          {
            path: 'users',
            component: UsersComponent,
          },
          {
            path: 'admins',
            component: AdminsComponent,
          },
        ],
      },
      {
        path: 'exchanges',
        component: ExchangeComponent,
      },
      {
        path: 'logs',
        component: LogsComponent,
        children: [
          {
            path: 'admins-logs',
            component: AdminsLogsComponent,
          },
          {
            path: 'users-logs',
            component: UsersLogsComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRouteModule {}
