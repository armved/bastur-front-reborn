import { Customer } from '../../../../shared/models/Customer';
import { FormGroup, FormControl } from '@angular/forms';
import { Component } from '@angular/core';
import { BaseFormComponent } from '../../../../shared/components/base-form.component';
import { plainToClass } from 'class-transformer';
import { CustomerService } from '../../customer.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-customer-modal',
  templateUrl: './add-customer-modal.component.html',
  styleUrls: ['./add-customer-modal.component.css']
})
export class AddCustomerModalComponent extends BaseFormComponent {

  constructor(
    public dialogRef: MatDialogRef<AddCustomerModalComponent>,
    private customerService: CustomerService,
  ) {
    super();
  }

  protected createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      dateStartedToWork: new FormControl(new Date()),
    });
  }

  public onSubmit(event: Event): void {
    event.preventDefault();

    const customer = plainToClass(Customer, this.form.value as Object);

    this.customerService.createCustomer(customer)
      .subscribe((responseCustomer: Customer) => this.dialogRef.close());
  }
}
