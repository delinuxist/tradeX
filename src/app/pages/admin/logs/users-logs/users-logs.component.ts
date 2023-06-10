import { Component } from '@angular/core';
import { UserReport } from '../../../../shared/interfaces/admin/user-report.model';
import { LogReportService } from '../../../../core/services/admin/log-report.service';

@Component({
  selector: 'app-users-logs',
  templateUrl: './users-logs.component.html',
  styleUrls: ['./users-logs.component.css'],
})
export class UsersLogsComponent {
  allUsersReport: UserReport[] = [];
  constructor(private logService: LogReportService) {}
  ngOnInit(): void {
    this.logService.getAllUsersReport().subscribe({
      next: (data) => (this.allUsersReport = data),
    });
  }
}
