import { Component, Input } from '@angular/core';

@Component({
  selector: 'ludan-sudoku-grid',
  styleUrls: ['./sudoku-grid.component.scss'],
  template: `
    <div class="sudoku-grid">
      <!-- prettier-ignore -->
      <div *ngFor='let square of [].constructor(9)' class='small-grid'>
        <div *ngFor="let square of [].constructor(9)" class='cell'>
          <input ludan-number-input maxlength="1" />
        </div>
      </div>
    </div>
  `
})
export class SudokuGridComponent {
  @Input() sudokuSolution: number[];
  @Input() sudokuPuzzle: number[];
}
