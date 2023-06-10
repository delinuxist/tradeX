import { Component, OnInit } from '@angular/core';
import { Customers } from '../../../../shared/interfaces/admin/user-report.model';
import { CustomerService } from '../../../../core/services/admin/customer.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  clients: Customers[] = [];

  ngOnInit(): void {
    this.customerService.getAllClients().subscribe({
      next: (data) => (this.clients = data),
    });
  }
}
