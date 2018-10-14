import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    CoreRoutingModule,
  ],
  declarations: []
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
