import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { UserReport } from '../../../shared/interfaces/admin/user-report.model';

@Injectable({
  providedIn: 'root',
})
export class LogReportService {
  constructor(private http: HttpClient) {}

  getAllUsersReport() {
    return this.http.get<UserReport[]>(environment.baseUrl + '/report/users');
  }

  getAllAdminsReport() {
    return this.http.get<UserReport[]>(environment.baseUrl + '/report/admins');
  }
}
