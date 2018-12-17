import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GreeterComponent } from './greeter.component';

const routes: Routes = [
  {
    path: 'greeter',
    component: GreeterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GreeterRoutingModule {}
