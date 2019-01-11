import { NgModule } from '@angular/core';

import { NumberInputModule } from '../shared/components/number-input/number-input.module';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku.routing';

@NgModule({
  imports: [SudokuRoutingModule, NumberInputModule],
  declarations: [SudokuComponent],
  exports: [SudokuComponent]
})
export class SudokuModule {}
