import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SudokuGridModule } from './shared/sudoku-grid/sudoku-grid.module';
import { SudokuService } from './shared/sudoku.service';
import { SudokuComponent } from './sudoku.component';
import { SudokuRoutingModule } from './sudoku.routing';

@NgModule({
  imports: [SudokuRoutingModule, SudokuGridModule, CommonModule],
  declarations: [SudokuComponent],
  providers: [SudokuService],
  exports: [SudokuComponent]
})
export class SudokuModule {}
