import { Component } from '@angular/core';

@Component({
  selector: 'ludan-sudoku',
  styleUrls: ['./sudoku.component.scss'],
  template: `
    <div class="sudoku"><ludan-sudoku-grid></ludan-sudoku-grid></div>
  `
})
export class SudokuComponent {}
