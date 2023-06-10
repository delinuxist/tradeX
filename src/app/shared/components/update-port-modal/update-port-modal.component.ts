import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { PortfolioService } from '../../../core/services/client/portfolio.service';
import { portfolioRequest } from '../../interfaces/portfolio.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-port-modal',
  templateUrl: './update-port-modal.component.html',
  styleUrls: ['./update-port-modal.component.css'],
})
export class UpdatePortModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialog,
    private portfolioService: PortfolioService,
    private toaster: ToastrService,
    private activeRoute: ActivatedRoute
  ) {}
  portfolioId: string = '';
  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe((params) => {
      this.portfolioId = params['portfolioId'];
    });
  }
  loading: boolean = false;
  portfolioPayload: portfolioRequest = {
    name: '',
  };

  updatePortfolio() {
    this.portfolioService
      .updatePortfolio(this.portfolioPayload, this.portfolioId)
      .subscribe({
        next: () => {
          this.toaster.success('Portfolio Updated');
          this.dialogRef.closeAll();
        },
        error: (err) => {
          this.toaster.error(err.error.name, 'Update Failed');
          this.loading = false;
          this.dialogRef.closeAll();
        },
      });
  }

  closeModal() {
    this.dialogRef.closeAll();
  }
}
