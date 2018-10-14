import { defaultOrderOptions } from './../../../../shared/constants/default-order-options';
import { plainToClass } from 'class-transformer';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { OrderService } from '../../order.service';
import { Order } from '../../../../shared/models/Order';
import { Customer } from '../../../../shared/models/Customer';
import { CustomerService } from '../../../customers/customer.service';
import { BaseFormComponent } from '../../../../shared/components/base-form.component';

@Component({
  selector: 'app-add-order-modal',
  templateUrl: './add-order-modal.component.html',
  styleUrls: ['./add-order-modal.component.css']
})
export class AddOrderModalComponent extends BaseFormComponent implements OnInit {
  public customers: Customer[];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AddOrderModalComponent>,
    private orderService: OrderService,
    private customerService: CustomerService,
  ) {
    super();
  }

  public ngOnInit(): void {
    super.ngOnInit();

    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  protected createForm(): FormGroup {
    return new FormGroup({
      customer: new FormControl(),
      weight: new FormControl(),
      pricePerKilo: new FormControl(defaultOrderOptions.pricePerKilo),
      dateOrdered: new FormControl(),
      dateDelivered: new FormControl(),
    });
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    const order = plainToClass(Order, this.form.value as Object);

    this.orderService.addOrder(order).subscribe(() => {
      this.dialogRef.close();
    });
  }
}
