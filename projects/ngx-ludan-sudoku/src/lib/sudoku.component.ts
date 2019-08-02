import { Component, EventEmitter, OnInit } from '@angular/core';

import { SudokuDifficulty } from './sudoku.model';
import { SudokuService } from './sudoku.service';

@Component({
  selector: 'ludan-sudoku',
  styleUrls: ['./sudoku.component.scss'],
  template: `
    <div class="sudoku">
      <div class="difficulty">
        <div class="difficulty__text">Pick your difficulty:</div>
        <div class="difficulty__button-row">
          <button
            class="ludan-button"
            (click)="setDifficulty(sudokuDifficultyEnum.EASY)"
            [class.highlight]="difficulty === sudokuDifficultyEnum.EASY"
          >
            Easy
          </button>
          <button
            class="ludan-button"
            (click)="setDifficulty(sudokuDifficultyEnum.MEDIUM)"
            [class.highlight]="difficulty === sudokuDifficultyEnum.MEDIUM"
          >
            Medium
          </button>
          <button
            class="ludan-button"
            (click)="setDifficulty(sudokuDifficultyEnum.HARD)"
            [class.highlight]="difficulty === sudokuDifficultyEnum.HARD"
          >
            Hard
          </button>
        </div>
      </div>
      <div class="sudoku__grid">
        <ludan-sudoku-grid
          [nestedSudokuPuzzle]="nestedSudokuPuzzle"
          [nestedSudokuSolution]="nestedSudokuSolution"
          [verifyEvent]="verifyEvent"
          [displaySolution]="displaySolution"
        ></ludan-sudoku-grid>
      </div>
      <div class="action-toolbar">
        <button class="ludan-button" (click)="initSudokuPuzzle()">Reset</button>
        <button class="ludan-button" (click)="verify()">Verify</button>
        <button class="ludan-button" (click)="displaySol()">Solution</button>
      </div>
    </div>
  `
})
export class SudokuComponent implements OnInit {
  sudokuSolution: number[];
  sudokuPuzzle: number[];
  nestedSudokuPuzzle: number[][];
  nestedSudokuSolution: number[][];
  difficulty: SudokuDifficulty = SudokuDifficulty.MEDIUM;
  sudokuDifficultyEnum = SudokuDifficulty;
  verifyEvent: EventEmitter<boolean> = new EventEmitter();
  displaySolution: boolean;

  constructor(private sudokuService: SudokuService) {}

  ngOnInit() {
    this.initSudokuPuzzle();
  }

  setDifficulty = (difficulty: SudokuDifficulty) => {
    if (difficulty === this.difficulty) return;
    this.difficulty = difficulty;
    this.initSudokuPuzzle();
  };

  initSudokuPuzzle = () => {
    this.sudokuSolution = this.sudokuService.generateSudokuSolution();
    this.sudokuPuzzle = this.sudokuService.generateSudokuPuzzle(this.sudokuSolution, this.difficulty);
    this.nestedSudokuPuzzle = this.sudokuService.formatToNestedSudokuPuzzle(this.sudokuPuzzle);
    this.nestedSudokuSolution = this.sudokuService.formatToNestedSudokuPuzzle(this.sudokuSolution);
    this.verifyEvent.emit(false);
    this.displaySolution = false;
  };

  verify = () => {
    this.verifyEvent.emit(true);
  };

  displaySol = () => {
    this.verifyEvent.emit(false);
    this.displaySolution = true;
  };
}
