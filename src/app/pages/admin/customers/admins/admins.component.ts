import { Component, OnInit } from '@angular/core';
import { Customers } from '../../../../shared/interfaces/admin/user-report.model';
import { CustomerService } from '../../../../core/services/admin/customer.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css'],
})
export class AdminsComponent implements OnInit {
  constructor(private customerService: CustomerService) {}
  admins: Customers[] = [];
  ngOnInit(): void {
    this.customerService.getAllAdmins().subscribe({
      next: (data) => (this.admins = data),
    });
  }
}
