import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { MarketData } from '../../../shared/interfaces/market.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MarketService {
  constructor(private http: HttpClient) {}

  getStocksByTicker(ticker: string) {
    return this.http.post<MarketData[]>(
      environment.marketData + '/market/getStock',
      ticker
    );
  }
}
