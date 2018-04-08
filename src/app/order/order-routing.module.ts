import { Routes } from '@angular/router';
import { OrdersViewComponent } from './orders-view/orders-view.component';

export const orderRoutes: Routes = [
  {
    path: 'orders',
    component: OrdersViewComponent,
  }
];
