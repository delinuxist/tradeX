import { Injectable } from '@angular/core';
import {
  portfolioRequest,
  portfolioResponse,
} from '../../shared/interfaces/portfolio.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  createPortfolio(portfolioData: portfolioRequest) {
    return this.http.post<portfolioResponse>(
      'http://localhost:8080/api/order/portfolio',
      portfolioData
    );
  }

  fetchPortfolios() {
    return this.http.get<portfolioResponse[]>(
      'http://localhost:8080/api/order/portfolio'
    );
  }

  deletePortfolio() {}
}
