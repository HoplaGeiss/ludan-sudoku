import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SudokuGridModule } from './sudoku-grid/sudoku-grid.module';
import { SudokuService } from './sudoku.service';
import { SudokuComponent } from './sudoku.component';

@NgModule({
  imports: [SudokuGridModule, CommonModule],
  declarations: [SudokuComponent],
  providers: [SudokuService],
  exports: [SudokuComponent]
})
export class SudokuModule {}
