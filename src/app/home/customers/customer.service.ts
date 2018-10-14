import { CustomerApiService } from './customer-api.service';
import { Injectable } from '@angular/core';
import { Customer } from '../../shared/models/Customer';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { of, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private newCustomerSource: Subject<Customer> = new Subject();
  public newCustomer$ = this.newCustomerSource.asObservable();

  private removedCustomerIdSource: Subject<number> = new Subject();
  public removedCustomerId$ = this.removedCustomerIdSource.asObservable();

  constructor(private customerApi: CustomerApiService) {}

  public createCustomerForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      dateStartedToWork: new FormControl(),
    });
  }

  public getCustomers(): Observable<Customer[]> {
    return this.customerApi.getCustomers();
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.customerApi.createCustomer(customer).pipe(
      tap((responseCustomer: Customer) => this.newCustomerSource.next(responseCustomer))
    );
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.customerApi.deleteCustomer(id).pipe(
      tap(() => this.removedCustomerIdSource.next(id))
    );
  }
}
