import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
