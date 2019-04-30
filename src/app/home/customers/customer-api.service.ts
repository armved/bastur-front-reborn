import { Injectable } from '@angular/core';
import { BaseApiService } from '@core/base-api.service';
import { ApiRequest } from '@shared/models/api/api-request.model';
import { Customer } from '@shared/models/customer.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService extends BaseApiService {
  public getCustomers(): Observable<Customer[]> {
    const request = new ApiRequest(this.baseApiUrl).withMethod('GET').withUrl('/customers');

    return this.makeRequest<Customer>(request, Customer, true);
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    const request = new ApiRequest(this.baseApiUrl)
      .withMethod('POST')
      .withUrl('/customers')
      .withBody(customer);

    return this.makeRequest<Customer>(request, Customer);
  }

  public deleteCustomer(id: number): Observable<any> {
    const request = new ApiRequest(this.baseApiUrl)
      .withMethod('DELETE')
      .withUrl(`/customers/${id}`);

    return this.makeRequest(request, Object);
  }
}
