import { Component, OnInit } from '@angular/core';
import { SudokuService } from './sudoku.service';

@Component({
  selector: 'ludan-sudoku',
  styleUrls: ['./sudoku.component.scss'],
  template: `
    <div class="sudoku"><ludan-sudoku-grid></ludan-sudoku-grid></div>
  `
})
export class SudokuComponent implements OnInit {
  constructor(private sudokuService: SudokuService) {}
  ngOnInit() {
    this.sudokuService.generateSudoku();
  }
}
