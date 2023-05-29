import { Component, OnInit } from '@angular/core';
import {
  portfolioRequest,
  portfolioResponse,
} from '../../shared/interfaces/portfolio.model';
import { PortfolioService } from '../../core/services/portfolio.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(
    private portfolioService: PortfolioService,
    private toast: ToastrService
  ) {}
  portfolios: portfolioResponse[] = [];
  page = '';
  portfolioData: portfolioRequest = {
    name: '',
  };

  ngOnInit(): void {
    this.page = 'Portfolio';
    this.portfolioService.fetchPortfolios().subscribe((data) => {
      this.portfolios = data;
    });
  }

  createPortfolio(porfolioData: portfolioRequest) {
    this.portfolioService.createPortfolio(porfolioData).subscribe({
      next: (data) => {
        this.toast.success(`${data.name}`, 'Portfolio created');
      },
      error: (err) => {
        console.log(err);
        this.toast.error(err.error.name, 'Order Failed');
      },
    });
  }
}
