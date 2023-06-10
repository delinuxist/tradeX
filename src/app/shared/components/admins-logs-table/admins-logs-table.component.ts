import { Component, Input } from '@angular/core';
import { UserReport } from '../../interfaces/admin/user-report.model';

@Component({
  selector: 'admins-logs-table',
  templateUrl: './admins-logs-table.component.html',
  styleUrls: ['./admins-logs-table.component.css'],
})
export class AdminsLogsTableComponent {
  @Input()
  logs: UserReport[] = [];
}
