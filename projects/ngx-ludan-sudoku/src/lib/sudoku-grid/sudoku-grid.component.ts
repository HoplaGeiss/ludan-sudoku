import { Component, Input, OnInit, EventEmitter, ElementRef, ViewChildren } from '@angular/core';

@Component({
  selector: 'ludan-sudoku-grid',
  styleUrls: ['./sudoku-grid.component.scss'],
  template: `
    <form class="sudoku-grid">
      <div *ngFor="let smallGrid of [].constructor(9); let i = index" class="small-grid">
        <div *ngFor="let cell of [].constructor(9); let j = index" class="cell">
          <!-- prettier-ignore -->
          <input
            ludan-number-input
            maxlength="1"
            [value]="displaySolution ? nestedSudokuSolution[i][j] : (nestedSudokuPuzzle[i][j] ? nestedSudokuPuzzle[i][j] : null)
            "
            [disabled]="nestedSudokuPuzzle[i][j]"
            [class.error]="false"
            class="input-{{ i }}-{{ j }}"
            (focus)='clearErrorClass()'
          />
        </div>
      </div>
    </form>
  `
})
export class SudokuGridComponent implements OnInit {
  @Input() nestedSudokuSolution: number[][];
  @Input() nestedSudokuPuzzle: number[][];
  @Input() verifyEvent: EventEmitter<boolean>;
  @Input() displaySolution: boolean;

  userSudokuGrid: number[][];

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.verifyEvent.subscribe(verify => {
      if (verify) {
        this.nestedSudokuSolution.map((smallGridSolution, i) => {
          smallGridSolution.map((cellSolution, j) => {
            const input = this.elementRef.nativeElement.querySelector('.input-' + i + '-' + j);
            if (cellSolution.toString() !== input.value) input.classList.add('error');
          });
        });
      } else {
        this.clearErrorClass();
      }
    });
  }

  clearErrorClass = () => {
    const inputs = this.elementRef.nativeElement.querySelectorAll('input.error');
    for (let i = 0; i < inputs.length; ++i) {
      inputs[i].classList.remove('error');
    }
  };
}
