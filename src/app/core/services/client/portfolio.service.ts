import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import {
  portfolioRequest,
  portfolioResponse,
} from '../../../shared/interfaces/portfolio.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PortfolioService {
  constructor(private http: HttpClient) {}

  createPortfolio(portfolioData: portfolioRequest) {
    return this.http.post<portfolioResponse>(
      environment.baseUrl + '/order/portfolio',
      portfolioData
    );
  }

  fetchPortfolios() {
    return this.http.get<portfolioResponse[]>(
      environment.baseUrl + '/order/portfolio'
    );
  }

  updatePortfolio(portfolioData: portfolioRequest, portfolioId: string) {
    console.log(portfolioId);
    return this.http.patch<portfolioResponse>(
      environment.baseUrl + `/order/portfolio/${portfolioId}`,
      portfolioData
    );
  }

  deletePortfolio() {}
}
