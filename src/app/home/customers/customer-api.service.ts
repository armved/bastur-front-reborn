import { BaseApiService } from './../../core/base-api.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Customer } from '../../shared/models/Customer';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class CustomerApiService extends BaseApiService {

  public getCustomers(): Observable<Customer[]> {
    return this.http.get(`${this.baseApiUrl}/customers`).pipe(
      map((customers: Customer[]) => plainToClass(Customer, customers)),
    );
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post(`${this.baseApiUrl}/customers`, customer).pipe(
      map((responseCustomer: Customer) => plainToClass(Customer, responseCustomer))
    );
  }

  public deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/customers/${id}`);
  }
}
