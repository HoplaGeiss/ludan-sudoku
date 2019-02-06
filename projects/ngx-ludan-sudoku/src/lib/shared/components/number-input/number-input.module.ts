import { NgModule } from '@angular/core';

import { NumberInputDirective } from './number-input.directive';

@NgModule({
  declarations: [NumberInputDirective],
  exports: [NumberInputDirective]
})
export class NumberInputModule {}
