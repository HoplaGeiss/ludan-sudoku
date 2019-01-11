import { NgModule } from '@angular/core';

import { SudokuGridModule } from './sudoku-grid/sudoku-grid.module';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku.routing';

@NgModule({
  imports: [SudokuRoutingModule, SudokuGridModule],
  declarations: [SudokuComponent],
  exports: [SudokuComponent]
})
export class SudokuModule {}
