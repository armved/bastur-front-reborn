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
  public displayedColumns = ['dateStartedToWork', 'name'];
  private addCustomerModalRef: MatDialogRef<AddCustomerModalComponent>;

  constructor(
    private customerService: CustomerService,
    private dialogService: MatDialog
  ) {}

  ngOnInit() {
    this.customerService.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
    });
  }

  openAddOrderModal() {
    this.addCustomerModalRef = this.dialogService.open(AddCustomerModalComponent, {
      width: '350px'
    });
  }
}
