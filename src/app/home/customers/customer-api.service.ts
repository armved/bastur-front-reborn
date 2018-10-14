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

  public addCustomer(customer: Customer): Observable<Customer> {
    //
    return null;
  }
}
