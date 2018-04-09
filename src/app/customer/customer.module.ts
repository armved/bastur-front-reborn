import { NgModule } from '@angular/core';
import { CustomersViewComponent } from './customers-view/customers-view.component';
import { CustomersTableComponent } from './customers-table/customers-table.component';
import { CustomerService } from './customer.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [CustomersViewComponent, CustomersTableComponent],
  providers: [CustomerService]
})
export class CustomerModule {}
