import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ludan-sudoku-grid',
  styleUrls: ['./sudoku-grid.component.scss'],
  template: `
    <div class="sudoku-grid">
      <div *ngFor="let square of [].constructor(9); let i = index" class="small-grid">
        <div *ngFor="let square of [].constructor(9); let j = index" class="cell">
          <!-- prettier-ignore -->
          <input ludan-number-input maxlength="1" [value]='nestedSudokuPuzzle[i][j] ? nestedSudokuPuzzle[i][j] : null
          ' [disabled]='nestedSudokuPuzzle[i][j]'/>
        </div>
      </div>
    </div>
  `
})
export class SudokuGridComponent {
  @Input() sudokuSolution: number[];
  @Input() nestedSudokuPuzzle: number[];
}
