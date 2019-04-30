import { Injectable } from '@angular/core';
import { ApiRequest } from '@shared/models/api/api-request.model';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../shared/models/order.model';
import { BaseApiService } from './../../core/base-api.service';

@Injectable({
  providedIn: 'root',
})
export class OrderApiService extends BaseApiService {
  public getOrders(): Observable<Order[]> {
    const request = new ApiRequest(this.baseApiUrl).withMethod('GET').withUrl('/orders');

    return this.makeRequest<Order>(request, Order, true);
  }

  public createOrder(order: Order): Observable<Order> {
    const request = new ApiRequest(this.baseApiUrl)
      .withMethod('POST')
      .withUrl('/orders')
      .withBody(order);

    return this.makeRequest<Order>(request, Order);
  }

  public deleteOrder(id: number): Observable<any> {
    const request = new ApiRequest(this.baseApiUrl).withMethod('DELETE').withUrl(`/orders/${id}`);

    return this.makeRequest(request, Object);
  }
}
