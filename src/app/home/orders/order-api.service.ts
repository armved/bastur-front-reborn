import { BaseApiService } from './../../core/base-api.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { plainToClass } from 'class-transformer';
import { Order } from '../../shared/models/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderApiService extends BaseApiService {

  public getOrders(): Observable<Order[]> {
    return this.http.get(`${this.baseApiUrl}/orders`).pipe(
      map((orders: Order[]) => plainToClass(Order, orders)),
    );
  }

  public createOrder(order: Order): Observable<Order> {
    return this.http.post(`${this.baseApiUrl}/orders`, order).pipe(
      map((responseOrder: Order) => plainToClass(Order, responseOrder)),
    );
  }

  public deleteOrder(id: number): Observable<any> {
    return this.http.delete(`${this.baseApiUrl}/orders/${id}`);
  }
}
