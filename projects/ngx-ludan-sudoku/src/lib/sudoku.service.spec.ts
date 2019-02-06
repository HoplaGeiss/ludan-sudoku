import { TestBed, getTestBed } from '@angular/core/testing';
import { SudokuService } from './sudoku.service';
import * as _ from 'underscore';
import { SudokuDifficulty } from './sudoku.model';

describe('SudokuService', () => {
  let injector: TestBed;
  let service: SudokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SudokuService]
    });
    injector = getTestBed();
    service = TestBed.get(SudokuService);
  });

  it('generateSudokuPuzzle', () => {
    const sudokuSolution = service.generateSudokuSolution();
    const sudokuPuzzle = service.generateSudokuPuzzle(sudokuSolution, SudokuDifficulty.MEDIUM);

    const undefinedCount = sudokuPuzzle.filter(value => value !== undefined).length;
    expect(undefinedCount === SudokuDifficulty.MEDIUM);
  });

  describe('generateSudokuSolution', () => {
    let referenceArray: number[];
    let sudokuPuzzle: number[];

    beforeEach(() => {
      referenceArray = Array.from({ length: 9 }, (v, k) => k + 1);
      sudokuPuzzle = service.generateSudokuSolution();
    });

    it('has [0..9] on the horizontal', () => {
      const lines = new Array(9);
      for (let i = 0; i < 9; i++) {
        lines[i] = sudokuPuzzle.slice(9 * i, 9 * (i + 1));
      }

      expect(lines.every(line => _.difference(referenceArray, line === 0)));
    });

    it('has [0..9] on the vertical', () => {
      const cols = new Array(9);
      for (let i = 0; i < 9; i++) cols[i] = new Array();

      for (let i = 0; i < 81; i++) {
        const colIndex = i % 9;
        cols[colIndex] = [...cols[colIndex], sudokuPuzzle[i]];
      }

      expect(cols.every(col => _.difference(referenceArray, col === 0)));
    });

    it('has [0..9] in the small grid', () => {
      const nestedSudokuPuzzle = service.formatToNestedSudokuPuzzle(sudokuPuzzle);

      expect(nestedSudokuPuzzle.every((smallGrid: any) => _.difference(referenceArray, smallGrid === 0)));
    });
  });
});
