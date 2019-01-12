import { Component, OnInit } from '@angular/core';
import { SudokuService } from './shared/sudoku.service';
import { SudokuDifficulty } from './shared/sudoku.model';

@Component({
  selector: 'ludan-sudoku',
  styleUrls: ['./sudoku.component.scss'],
  template: `
    <div class="sudoku">
      <h1>Ludan Sudoku</h1>
      <div class="difficulty">
        <div>Pick your difficulty:</div>
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
      <ludan-sudoku-grid
        [sudokuSolution]="sudokuSolution"
        [nestedSudokuPuzzle]="nestedSudokuPuzzle"
      ></ludan-sudoku-grid>
      <div class="action-toolbar">
        <button class="ludan-button" (click)="initSudokuPuzzle()">Reset</button>
        <button class="ludan-button">Verify</button>
      </div>
    </div>
  `
})
export class SudokuComponent implements OnInit {
  sudokuSolution: number[];
  sudokuPuzzle: number[];
  nestedSudokuPuzzle: number[][];
  difficulty: SudokuDifficulty = SudokuDifficulty.MEDIUM;
  sudokuDifficultyEnum = SudokuDifficulty;

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
  };
}
