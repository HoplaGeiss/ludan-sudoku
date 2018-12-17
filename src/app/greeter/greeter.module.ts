import { GreeterComponent } from './greeter.component';
import { NgModule } from '@angular/core';
import { GreeterRoutingModule } from './greeter.routing';

@NgModule({
  imports: [GreeterRoutingModule],
  declarations: [GreeterComponent],
  exports: [GreeterComponent]
})
export class GreeterModule {}
