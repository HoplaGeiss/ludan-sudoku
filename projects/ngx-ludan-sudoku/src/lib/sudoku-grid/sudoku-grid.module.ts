import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NumberInputModule } from '../shared/components/number-input/number-input.module';
import { SudokuGridComponent } from './sudoku-grid.component';

@NgModule({
  imports: [NumberInputModule, CommonModule],
  declarations: [SudokuGridComponent],
  exports: [SudokuGridComponent]
})
export class SudokuGridModule {}
