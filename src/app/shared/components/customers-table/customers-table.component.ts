import { Component, Input } from '@angular/core';
import { Customers } from '../../interfaces/admin/user-report.model';

@Component({
  selector: 'customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent {

  @Input()
  customers: Customers[] = []
}
