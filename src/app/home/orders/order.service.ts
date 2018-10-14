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
  private defaultPricePerKilo = 330;

  constructor(private orderApi: OrderApiService) {}

  public createOrderForm(): FormGroup {
    return new FormGroup({
      customer: new FormControl(),
      weight: new FormControl(),
      pricePerKilo: new FormControl(this.defaultPricePerKilo),
      dateOrdered: new FormControl(),
      dateDelivered: new FormControl(),
    });
  }

  public getOrders(): Observable<Order[]> {
    return this.orderApi.getOrders();
  }

  public addOrder(order: Order): Observable<Order> {
    // TODO
    return of(order);
  }
}
