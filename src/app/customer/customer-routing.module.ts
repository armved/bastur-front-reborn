import { Routes } from '@angular/router';
import { CustomersViewComponent } from './customers-view/customers-view.component';

export const customerRoutes: Routes = [
  {
    path: 'customers',
    component: CustomersViewComponent,
  }
];
