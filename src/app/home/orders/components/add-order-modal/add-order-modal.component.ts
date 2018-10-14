import { plainToClass } from 'class-transformer';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { OrderService } from '../../order.service';
import { Order } from '../../../../shared/models/Order';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Customer } from '../../../../shared/models/Customer';
import { CustomerService } from '../../../customers/customer.service';

@Component({
  selector: 'app-add-order-modal',
  templateUrl: './add-order-modal.component.html',
  styleUrls: ['./add-order-modal.component.css']
})
export class AddOrderModalComponent implements OnInit {
  public orderForm: FormGroup;
  public customers: Customer[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddOrderModalComponent>,
    private orderService: OrderService,
    private customerService: CustomerService,
  ) {}

  ngOnInit() {
    this.orderForm = this.orderService.createOrderForm();
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  onSubmit(event: Event) {
    event.preventDefault();
    const order = plainToClass(Order, this.orderForm.value as Object);

    this.orderService.addOrder(order).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
