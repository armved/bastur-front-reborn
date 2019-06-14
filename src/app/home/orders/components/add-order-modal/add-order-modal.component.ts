import { defaultOrderOptions } from './../../../../shared/constants/default-order-options';
import { plainToClass } from 'class-transformer';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { OrderService } from '../../order.service';
import { Order } from '../../../../shared/models/order.model';
import { Customer } from '../../../../shared/models/customer.model';
import { CustomerService } from '../../../customers/customer.service';
import { BaseFormComponent } from '../../../../shared/components/base-form.component';

@Component({
  selector: 'app-add-order-modal',
  templateUrl: './add-order-modal.component.html',
  styleUrls: ['./add-order-modal.component.css'],
})
export class AddOrderModalComponent extends BaseFormComponent implements OnInit {
  public customers$: Customer[];

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

    this.customerService.getCustomers().subscribe(customers => (this.customers$ = customers));
  }

  protected createForm(): FormGroup {
    return new FormGroup({
      customer: new FormControl(null, Validators.required),
      weight: new FormControl(null, Validators.required),
      pricePerKilo: new FormControl(defaultOrderOptions.pricePerKilo, Validators.required),
      dateOrdered: new FormControl(new Date(), Validators.required),
      dateDelivered: new FormControl(new Date()),
    });
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    if (this.form.valid) {
      const order = plainToClass(Order, this.form.value as Object);

      this.orderService.createOrder(order).subscribe(() => this.dialogRef.close());
    }
  }
}
