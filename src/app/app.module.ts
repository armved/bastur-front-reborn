import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomerModule } from './customer/customer.module';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { OrderModule } from './order/order.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
  
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CustomerModule,
    OrderModule,
    HomeModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
