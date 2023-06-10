import { Component, Input } from '@angular/core';
import { tickerMap } from '../../../core/constants/stockImg';
import { MarketData } from '../../interfaces/market.model';

@Component({
  selector: 'app-stock-card',
  templateUrl: './stock-card.component.html',
  styleUrls: ['./stock-card.component.css'],
})
export class StockCardComponent {
  @Input() stocks: MarketData[] = [];
  ticker: any = tickerMap;
  constructor() {}
}
