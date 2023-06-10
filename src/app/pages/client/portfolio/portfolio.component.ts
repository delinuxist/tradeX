import { Component, OnInit } from '@angular/core';
import {
  portfolioRequest,
  portfolioResponse,
} from '../../../shared/interfaces/portfolio.model';
import { ToastrService } from 'ngx-toastr';
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexNonAxisChartSeries,
} from 'ng-apexcharts';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { PortfolioService } from '../../../core/services/client/portfolio.service';
import { OrderStompService } from '../../../core/services/client/order-stomp.service';
import { Message } from '@stomp/stompjs';
import { UpdatePortModalComponent } from '../../../shared/components/update-port-modal/update-port-modal.component';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  constructor(
    private portfolioService: PortfolioService,
    private toast: ToastrService,
    private dialogueRef: MatDialog,
    private orderStomp: OrderStompService
  ) {}
  portfolios: portfolioResponse[] = [];
  page = '';
  portfolioData: portfolioRequest = {
    name: '',
  };

  series: ApexNonAxisChartSeries = [40, 20, 20];
  chartDetails: ApexChart = {
    type: 'pie',
    toolbar: {
      show: true,
    },
  };

  ngOnInit() {
    this.page = 'Portfolio';
    this.portfolioService.fetchPortfolios().subscribe({
      next: (data) => {
        this.portfolios = data;
      },
    });
    this.orderStomp.watch('/portfolio').subscribe((message: Message) => {
      this.portfolioService.fetchPortfolios().subscribe({
        next: (data) => (this.portfolios = data),
      });
    });
  }

  openDialog() {
    this.dialogueRef.open(ModalComponent);
  }
}
