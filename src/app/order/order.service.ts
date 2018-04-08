import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order, OrderDTO } from '../shared/models/Order';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrderService {
  private ordersCollection$: AngularFirestoreCollection<OrderDTO[]>;

  constructor(private db: AngularFirestore) {
    this.ordersCollection$ = this.db.collection('orders');
  }

  public getOrders(): Observable<Order[]> {
    return this.ordersCollection$
      .valueChanges()
      .map((orders: OrderDTO[]) => orders.map(order => new Order(order)));
  }
}
