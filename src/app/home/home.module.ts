import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OrderModule } from '../order/order.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule, OrderModule],
  exports: [HomeComponent],
  declarations: [HomeComponent, DashboardComponent]
})
export class HomeModule {}
