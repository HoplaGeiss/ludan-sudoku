import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SudokuGridModule } from './sudoku-grid/sudoku-grid.module';
import { SudokuComponent } from './sudoku.component';
import { SudokuService } from './sudoku.service';

@NgModule({
  imports: [SudokuGridModule, CommonModule, FlexLayoutModule],
  declarations: [SudokuComponent],
  providers: [SudokuService],
  exports: [SudokuComponent]
})
export class SudokuModule {}
