import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { tap } from 'rxjs/operators';
import { Customer } from '../../shared/models/customer.model';
import { CustomerApiService } from './customer-api.service';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private customersSource: Subject<Customer[]> = new Subject();
  private customers: Customer[];
  public customers$ = this.customersSource.asObservable();

  constructor(private customerApi: CustomerApiService) {}

  public createCustomerForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(),
      dateStartedToWork: new FormControl(),
    });
  }

  public getCustomers(): Observable<Customer[]> {
    this.customerApi.getCustomers().subscribe((customers: Customer[]) => {
      this.customers = customers;
      this.customersSource.next(this.customers);
    });

    return this.customers$;
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.customerApi.createCustomer(customer).pipe(
      tap(responseCustomer => {
        this.customers = [...this.customers, responseCustomer];
        this.customersSource.next(this.customers);
      }),
    );
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.customerApi.deleteCustomer(id).pipe(
      tap(() => {
        this.customers = this.customers.filter(
          (customer: Customer) => customer.id !== id,
        );
        this.customersSource.next(this.customers);
      }),
    );
  }
}
