import { Injectable } from '@angular/core';
import { Order, OrderDTO } from '../shared/models/Order';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';
import { of } from 'rxjs';

@Injectable()
export class OrderService {
  private defaultPricePerKilo = 330;


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
    // TODO
    return of([]);
  }

  public addOrder(order: Order): Observable<Order> {
    // TODO
    return of();
  }
}
