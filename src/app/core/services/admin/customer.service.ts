import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customers } from '../../../shared/interfaces/admin/user-report.model';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getAllClients() {
    return this.http.get<Customers[]>(environment.baseUrl + '/user/allClients');
  }

  getAllAdmins() {
    return this.http.get<Customers[]>(environment.baseUrl + '/user/allAdmins');
  }
}
