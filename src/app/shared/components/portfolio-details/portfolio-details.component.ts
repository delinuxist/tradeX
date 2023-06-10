import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css'],
})
export class PortfolioDetailsComponent {
  portfolioId?: string;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe({
      next: (param) => {
        this.portfolioId = param['portfolioId'];
      },
    });
  }
}
