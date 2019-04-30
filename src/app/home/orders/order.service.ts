import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Order } from '../../shared/models/order.model';
import { OrderApiService } from './order-api.service';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private ordersSource: Subject<Order[]> = new Subject();
  private orders: Order[];
  public orders$ = this.ordersSource.asObservable();

  constructor(private orderApi: OrderApiService) {}

  public getOrders(): Observable<Order[]> {
    this.orderApi.getOrders().subscribe((orders: Order[]) => {
      this.orders = orders;
      this.ordersSource.next(this.orders);
    });

    return this.orders$;
  }

  public createOrder(order: Order): Observable<Order> {
    return this.orderApi.createOrder(order).pipe(
      tap((responseOrder: Order) => {
        this.orders = [...this.orders, responseOrder];
        this.ordersSource.next(this.orders);
      })
    );
  }

  public deleteOrder(id: number): Observable<any> {
    return this.orderApi.deleteOrder(id).pipe(
      tap(() => {
        this.orders = this.orders.filter((order: Order) => order.id !== id);
        this.ordersSource.next(this.orders);
      })
    );
  }
}
