import { Component } from '@angular/core';

import { UserReport } from '../../../shared/interfaces/admin/user-report.model';
import { LogReportService } from '../../../core/services/admin/log-report.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css'],
})
export class LogsComponent {
  constructor(private logServic: LogReportService) {}
  page: string = '';
  allAdminsReport: UserReport[] = [];
  allUsersReport: UserReport[] = [];

  ngOnInit(): void {
    this.page = 'Logs';
    this.logServic.getAllAdminsReport().subscribe({
      next: (data) => (this.allAdminsReport = data),
    });
    this.logServic.getAllUsersReport().subscribe({
      next: (data) => (this.allUsersReport = data),
    });
  }
}
