import { OrderApiService } from './order-api.service';
import { Injectable } from '@angular/core';
import { Order } from '../../shared/models/Order';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { of, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {

  constructor(private orderApi: OrderApiService) {}

  public getOrders(): Observable<Order[]> {
    return this.orderApi.getOrders();
  }

  public addOrder(order: Order): Observable<Order> {
    // TODO
    return of(order);
  }
}
