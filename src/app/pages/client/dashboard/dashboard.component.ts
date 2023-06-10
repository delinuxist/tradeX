import { Component, OnInit, ViewChild } from '@angular/core';
import { orderRequest } from '../../../shared/interfaces/order.model';
import { ToastrService } from 'ngx-toastr';
import { portfolioResponse } from '../../../shared/interfaces/portfolio.model';
import { OrderService } from '../../../core/services/client/order.service';
import { PortfolioService } from '../../../core/services/client/portfolio.service';
import { RxStompService } from 'src/app/core/services/client/rx-stomp.service';
import { Message } from '@stomp/stompjs';
import * as moment from 'moment';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexYAxis,
  ApexXAxis,
  ApexTitleSubtitle,
  ApexTooltip,
} from 'ng-apexcharts';
import { MarketService } from '../../../core/services/client/market.service';
import { MarketData, Plot } from '../../../shared/interfaces/market.model';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  @ViewChild('chart')
  chart: ChartComponent | undefined;
  public chartOptions: ChartOptions;
  market: Plot[] = [];
  plot?: Plot;
  exchangeMarket: MarketData[] = [];

  constructor(
    private orderService: OrderService,
    private portfolioService: PortfolioService,
    private stompService: RxStompService,
    private toast: ToastrService,
    private marketService: MarketService
  ) {
    this.chartOptions = {
      series: [
        {
          name: 'candle',
          data: [
            {
              x: new Date(1538778600000),
              y: [6629.81, 6650.5, 6623.04, 6633.33],
            },
            {
              x: new Date(1538780400000),
              y: [6632.01, 6643.59, 6620, 6630.11],
            },
            {
              x: new Date(1538782200000),
              y: [6630.71, 6648.95, 6623.34, 6635.65],
            },
            {
              x: new Date(1538784000000),
              y: [6635.65, 6651, 6629.67, 6638.24],
            },
            {
              x: new Date(1538785800000),
              y: [6638.24, 6640, 6620, 6624.47],
            },
            {
              x: new Date(1538787600000),
              y: [6624.53, 6636.03, 6621.68, 6624.31],
            },
            {
              x: new Date(1538789400000),
              y: [6624.61, 6632.2, 6617, 6626.02],
            },
            {
              x: new Date(1538791200000),
              y: [6627, 6627.62, 6584.22, 6603.02],
            },
            {
              x: new Date(1538793000000),
              y: [6605, 6608.03, 6598.95, 6604.01],
            },
            {
              x: new Date(1538794800000),
              y: [6604.5, 6614.4, 6602.26, 6608.02],
            },
            {
              x: new Date(1538796600000),
              y: [6608.02, 6610.68, 6601.99, 6608.91],
            },
            {
              x: new Date(1538798400000),
              y: [6608.91, 6618.99, 6608.01, 6612],
            },
            {
              x: new Date(1538800200000),
              y: [6612, 6615.13, 6605.09, 6612],
            },
            {
              x: new Date(1538802000000),
              y: [6612, 6624.12, 6608.43, 6622.95],
            },
            {
              x: new Date(1538803800000),
              y: [6623.91, 6623.91, 6615, 6615.67],
            },
            {
              x: new Date(1538805600000),
              y: [6618.69, 6618.74, 6610, 6610.4],
            },
            {
              x: new Date(1538807400000),
              y: [6611, 6622.78, 6610.4, 6614.9],
            },
            {
              x: new Date(1538809200000),
              y: [6614.9, 6626.2, 6613.33, 6623.45],
            },
            {
              x: new Date(1538811000000),
              y: [6623.48, 6627, 6618.38, 6620.35],
            },
            {
              x: new Date(1538812800000),
              y: [6619.43, 6620.35, 6610.05, 6615.53],
            },
            {
              x: new Date(1538814600000),
              y: [6615.53, 6617.93, 6610, 6615.19],
            },
            {
              x: new Date(1538816400000),
              y: [6615.19, 6621.6, 6608.2, 6620],
            },
            {
              x: new Date(1538818200000),
              y: [6619.54, 6625.17, 6614.15, 6620],
            },
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'candlestick',
      },
      title: {
        text: 'CandleStick Chart - Category X-axis',
        align: 'left',
      },
      tooltip: {
        enabled: true,
      },
      xaxis: {
        type: 'category',
        labels: {
          formatter: function (val) {
            return moment(val).format('MMM DD HH:mm');
          },
        },
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
      },
    };
  }

  public generateDayWiseTimeSeries(
    baseval: number,
    count: number,
    yrange: { max: number; min: number }
  ) {
    var i = 0;
    var series = [];
    while (i < count) {
      var y =
        Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

      series.push([baseval, y]);
      baseval += 86400000;
      i++;
    }
    return series;
  }
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
    this.stompService
      .watch('/exchangeResponse')
      .subscribe((message: Message) => {
        this.exchangeMarket = JSON.parse(message.body);
        console.log(this.exchangeMarket);
      });
    // this.marketService.getStocksByTicker('AMZN').subscribe({
    //   next: (data) => this.createSeries(data),
    // });
  }

  createSeries(data: MarketData[]) {
    data.forEach((stock) => {
      this.plot = {
        x: new Date(stock.timestamp),
        y: [
          stock.ASK_PRICE,
          stock.BID_PRICE,
          stock.BUY_LIMIT,
          stock.LAST_TRADED_PRICE,
        ],
      };
      this.market.push(this.plot);
    });
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
        console.log(this.market);
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
