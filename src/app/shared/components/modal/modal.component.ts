import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PortfolioService } from '../../../core/services/client/portfolio.service';
import { portfolioRequest } from '../../interfaces/portfolio.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  constructor(
    private dialogRef: MatDialog,
    private portfolioService: PortfolioService,
    private toaster: ToastrService
  ) {}
  loading: boolean = false;
  portfolioName: portfolioRequest = {
    name: '',
  };

  createPortfolio() {
    this.loading = true;
    this.portfolioService.createPortfolio(this.portfolioName).subscribe({
      next: (data) => {
        this.toaster.success(data.name + ' added', 'Successfully Created!');
        this.loading = false;
        this.dialogRef.closeAll();
      },
      error: (err) => {
        this.toaster.error(err.error.name, 'Portfolio Creation Failed');
        this.loading = false;
        this.dialogRef.closeAll();
      },
    });
  }

  closeModal() {
    this.dialogRef.closeAll();
  }
}
