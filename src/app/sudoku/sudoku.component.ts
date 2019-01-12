import { Component, OnInit } from '@angular/core';
import { SudokuService } from './shared/sudoku.service';
import { SudokuDifficulty } from './shared/sudoku.model';

@Component({
  selector: 'ludan-sudoku',
  styleUrls: ['./sudoku.component.scss'],
  template: `
    <div class="sudoku">
      <ludan-sudoku-grid
        [sudokuSolution]="sudokuSolution"
        [nestedSudokuPuzzle]="nestedSudokuPuzzle"
      ></ludan-sudoku-grid>
      <ludan-sudoku-settings (sudokuDifficultyEvent)="setDifficulty($event)"></ludan-sudoku-settings>
    </div>
  `
})
export class SudokuComponent implements OnInit {
  sudokuSolution: number[];
  sudokuPuzzle: number[];
  nestedSudokuPuzzle: number[][];
  difficulty: SudokuDifficulty = SudokuDifficulty.MEDIUM;

  constructor(private sudokuService: SudokuService) {}

  ngOnInit() {
    this.sudokuSolution = this.sudokuService.generateSudokuSolution();
    this.sudokuPuzzle = this.sudokuService.generateSudokuPuzzle(this.sudokuSolution, this.difficulty);
    this.nestedSudokuPuzzle = this.sudokuService.formatToNestedSudokuPuzzle(this.sudokuPuzzle);
    console.log(this.nestedSudokuPuzzle);
  }

  setDifficulty = (difficulty: SudokuDifficulty) => {
    this.difficulty = difficulty;
    this.sudokuPuzzle = this.sudokuService.generateSudokuPuzzle(this.sudokuSolution, difficulty);
  };
}
