import { Component, OnInit } from '@angular/core';
import {
  Customers,
  UserReport,
} from '../../../shared/interfaces/admin/user-report.model';
import { CustomerService } from '../../../core/services/admin/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  allClients: Customers[] = [];
  allAdmins: Customers[] = [];
  page: string = '';

  ngOnInit(): void {
    this.customerService.getAllClients().subscribe({
      next: (data) => (this.allClients = data),
    });
    this.customerService.getAllAdmins().subscribe({
      next: (data) => (this.allAdmins = data),
    });
  }
}
