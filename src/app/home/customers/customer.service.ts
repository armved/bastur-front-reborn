import { Injectable } from '@angular/core';
import { Customer } from '../../shared/models/Customer';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {

  public createCustomerForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      dateStartedToWork: new FormControl(),
    });
  }

  public getCustomers(): Observable<Customer[]> {
    // TODO
    return of([]);
  }

  public addCustomer(customer: Customer): Observable<Customer> {
    // TODO
    return of();
  }
}
