import { Routes, RouterModule } from '@angular/router';
import { OrdersViewComponent } from './components/orders-view/orders-view.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: '',
    component: OrdersViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
