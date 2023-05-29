import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../core/services/order.service';
import { orderRequest } from '../../shared/interfaces/order.model';
import { ToastrService } from 'ngx-toastr';
import { PortfolioService } from '../../core/services/portfolio.service';
import { portfolioResponse } from '../../shared/interfaces/portfolio.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(
    private orderService: OrderService,
    private portfolioService: PortfolioService,
    private toast: ToastrService
  ) {}
  page = '';
  portfolioId = '';
  payload: orderRequest = {
    quantity: 0,
    product: '',
    price: 0.0,
    type: '',
    side: '',
  };

  portfolios: portfolioResponse[] = [];

  ngOnInit(): void {
    this.page = 'Dashboard';
    this.portfolioService
      .fetchPortfolios()
      .subscribe({ next: (data) => (this.portfolios = data) });
  }

  stocks = ['MSFT', 'NFLX', 'GOOGL', 'AAPL', 'TSLA', 'IBM', 'ORCL', 'AMZN'];
  tradeTypes = ['MARKET', 'LIMIT'];

  buy(payload: orderRequest) {
    payload.side = 'BUY';
    this.orderService.placeOrder(payload, this.portfolioId).subscribe({
      complete: () => {
        this.toast.info('Processing order', 'Buy Order');
      },
      error: (err) => {
        console.log(err);
        this.toast.error(err.message, 'Order Failed');
      },
    });
  }

  sell(payload: orderRequest) {
    payload.side = 'SELL';
    this.orderService.placeOrder(payload, this.portfolioId).subscribe({
      complete: () => this.toast.info('Processing order', 'Sell Order'),
      error: (err) => {
        this.toast.error(err.message, 'Order Failed');
      },
    });
  }
}
