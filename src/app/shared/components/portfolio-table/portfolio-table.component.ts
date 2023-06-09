import { Component, Input } from '@angular/core';
import {
  portfolioRequest,
  portfolioResponse,
} from '../../interfaces/portfolio.model';
import { MatDialog } from '@angular/material/dialog';
import { UpdatePortModalComponent } from '../update-port-modal/update-port-modal.component';
import { PortfolioService } from '../../../core/services/client/portfolio.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio-table',
  templateUrl: './portfolio-table.component.html',
  styleUrls: ['./portfolio-table.component.css'],
})
export class PortfolioTableComponent {
  constructor(private dialogueRef: MatDialog, private router: Router) {}
  @Input() portfolios: portfolioResponse[] = [];

  openUpdate(portfolioId: string) {
    this.dialogueRef.open(UpdatePortModalComponent);
    this.router.navigate([], { queryParams: { portfolioId: portfolioId } });
  }
}
