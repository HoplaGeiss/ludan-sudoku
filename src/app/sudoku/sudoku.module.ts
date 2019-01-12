import { NgModule } from '@angular/core';

import { SudokuGridModule } from './sudoku-grid/sudoku-grid.module';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku.routing';
import { SudokuService } from './sudoku.service';

@NgModule({
  imports: [SudokuRoutingModule, SudokuGridModule],
  declarations: [SudokuComponent],
  providers: [SudokuService],
  exports: [SudokuComponent]
})
export class SudokuModule {}
