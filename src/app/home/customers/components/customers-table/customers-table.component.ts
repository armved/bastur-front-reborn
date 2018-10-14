import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Customer } from '../../../../shared/models/Customer';
import { CustomerService } from '../../customer.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { AddCustomerModalComponent } from '../add-customer-modal/add-customer-modal.component';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css']
})
export class CustomersTableComponent implements OnInit {
  public customers: Customer[];
  public displayedColumns = ['dateStartedToWork', 'name', 'actions'];
  private addCustomerModalRef: MatDialogRef<AddCustomerModalComponent>;

  constructor(
    private customerService: CustomerService,
    private dialogService: MatDialog
  ) {}

  public ngOnInit(): void {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
    this.customerService.newCustomer$.subscribe((customer: Customer) => {
      this.customers = [...this.customers, customer];
    });
    this.customerService.removedCustomerId$.subscribe((id: number) => {
      this.customers = this.customers.filter((customer: Customer) => customer.id !== id);
    });
  }

  public openAddOrderModal(): void {
    this.addCustomerModalRef = this.dialogService.open(AddCustomerModalComponent, {
      width: '350px'
    });
  }

  public deleteCustomer(id: number): void {
    this.customerService.deleteCustomer(id).subscribe();
  }
}
