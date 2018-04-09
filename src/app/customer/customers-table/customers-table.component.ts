import { Component, OnInit } from '@angular/core';
import { Customer, CustomerDTO } from '../../shared/models/Customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  public customers: CustomerDTO[];
  public displayedColumns = ['dateStartedToWork', 'name'];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers.map((customer: Customer) => customer.toJSON());
    });
  }

}
