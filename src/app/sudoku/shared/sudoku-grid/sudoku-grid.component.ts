import { Component, Input } from '@angular/core';

@Component({
  selector: 'ludan-sudoku-grid',
  styleUrls: ['./sudoku-grid.component.scss'],
  template: `
    <div class="sudoku-grid">
      <!-- prettier-ignore -->
      <div *ngFor="let square of [].constructor(81)" class='square'><input ludan-number-input maxlength="1" /></div>
    </div>
  `
})
export class SudokuGridComponent {
  @Input() sudokuSolution: number[];
  @Input() sudokuPuzzle: number[];
}
