import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Order, OrderDTO } from '../shared/models/Order';
import { Observable } from 'rxjs/Observable';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable()
export class OrderService {
  private defaultPricePerKilo = 330;
  private ordersCollection$: AngularFirestoreCollection<OrderDTO>;

  constructor(private db: AngularFirestore) {
    this.ordersCollection$ = this.db.collection('orders');
  }

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
    return this.ordersCollection$
      .valueChanges()
      .map((orders: OrderDTO[]) => orders.map((order: OrderDTO) => new Order(order)));
  }

  public addOrder(order: Order) {
    return this.ordersCollection$.add(order.toJSON());
  }
}
