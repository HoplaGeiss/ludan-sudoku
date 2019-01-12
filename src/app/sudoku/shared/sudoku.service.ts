import { SudokuDifficulty } from './sudoku.model';
import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable()
export class SudokuService {
  generateSudokuSolution = (): number[] => {
    const sudoku = this.attemptToGenerateSudoku();
    // The sudoku might not generate properly as some of them are not solvable.
    // So we might need to run this function multiple times.
    return sudoku ? sudoku : this.generateSudokuSolution();
  };

  // Given a sudoku solution and the difficulty of the game, we return a sudoku puzzle
  generateSudokuPuzzle = (solution: number[], difficulty: SudokuDifficulty): number[] => {
    const randomIndexes = this.generateRandomNumberArray(difficulty, 0, 81);
    randomIndexes.map(index => (solution[index] = undefined));
    // this.printGrid(solution);
    return solution;
  };

  formatToNestedSudokuPuzzle = (flatPuzzle: number[]): number[][] => {
    let nestedSudokuPuzzle = [];
    let row = 0;
    while (nestedSudokuPuzzle.length < 9) {
      const intArray = [[], [], []];
      while (intArray[2].length < 9) {
        for (let j = 0; j < 3; j++) {
          for (let k = 0; k < 3; k++) {
            intArray[j] = [...intArray[j], flatPuzzle[row * 9 + 3 * j + k]];
          }
        }
        row++;
      }
      nestedSudokuPuzzle = [...nestedSudokuPuzzle, ...intArray];
    }
    return nestedSudokuPuzzle;
  };

  private generateRandomNumberArray = (length: number, min: number, max: number) => {
    const numbers = [];
    while (numbers.length < length - 1) {
      const randomNumber = Math.floor(Math.random() * (max - min)) + min;
      if (numbers.indexOf(randomNumber) < 0) numbers.push(randomNumber);
    }
    return numbers;
  };

  private attemptToGenerateSudoku = () => {
    const sudokuGridNumbers = new Array(81);
    for (let i = 0; i < 9; i++) {
      let smallGridNumbers = [];
      // The sudoku grid is divided in 9 smaller grids
      for (let j = 0; j < 9; j++) {
        // position of the small grid
        const smallGridLine = Math.floor(i / 3);
        const smallGridCol = i % 3;

        // position of the cell in the small grid
        const cellLine = Math.floor(j / 3);
        const cellCol = j % 3;

        // Index of the current number in the sudoku grid
        const index = (smallGridLine * 3 + cellLine) * 9 + smallGridCol * 3 + cellCol;
        const newNumber = this.generateNumber(index, smallGridNumbers, sudokuGridNumbers);

        // If we don't find a new number, it means the sudoku is not solvable and we need to start from the beginning
        if (!newNumber) return;

        smallGridNumbers = [...smallGridNumbers, newNumber];
        sudokuGridNumbers[index] = newNumber;
      }
    }

    // this.printGrid(sudokuGridNumbers);
    return sudokuGridNumbers;
  };

  private generateNumber = (index: number, smallGridNumbers: number[], sudokuGridNumbers: number[]): number => {
    // In a sudoku game each number have 3 constraints: line, columns and small grid.
    const horizontalPossibilities = this.findHorizontalPossibilities(index, sudokuGridNumbers);
    const verticalPossibilities = this.findVerticalPosibilities(index, sudokuGridNumbers);
    const smallGridPossibilities = this.reverseArray(smallGridNumbers);

    // Once we have the 3 possibilites, we deduce the intersection
    const possibilitiesIntersection = _.intersection(
      horizontalPossibilities,
      verticalPossibilities,
      smallGridPossibilities
    );

    // Then we pick the number randomly from that array
    return possibilitiesIntersection[Math.floor(Math.random() * possibilitiesIntersection.length)];
  };

  private findHorizontalPossibilities = (index: number, sudokuGridNumbers: number[]): number[] => {
    const lineIndex = Math.floor(index / 9);
    const lineNumbers = this.findLineNumbers(lineIndex, sudokuGridNumbers);
    return this.reverseArray(lineNumbers);
  };

  private findVerticalPosibilities = (index: number, sudokuGridNumbers: number[]): number[] => {
    const columnIndex = index % 9;
    const columnNumbers = this.findColumnNumbers(columnIndex, sudokuGridNumbers);
    return this.reverseArray(columnNumbers);
  };

  // Find all the numbers of a line
  private findLineNumbers = (lineIndex: number, sudokuGridNumbers: number[]): number[] => {
    let lineNumbers = [];
    for (let i = 0; i < 9; i++) {
      lineNumbers = [...lineNumbers, sudokuGridNumbers[lineIndex * 9 + i]];
    }
    return lineNumbers;
  };

  // Find all the numbers of a column
  private findColumnNumbers = (columnIndex: number, sudokuGridNumbers: number[]): number[] => {
    let columnNumbers = [];
    for (let i = 0; i < 9; i++) {
      columnNumbers = [...columnNumbers, sudokuGridNumbers[i * 9 + columnIndex]];
    }
    return columnNumbers;
  };

  // Given an array of numbers, find which number from [0..9] are not present in that array.
  private reverseArray = (inputArray: number[]): number[] => {
    let resultArray = [];
    for (let i = 1; i <= 9; i++) {
      if (inputArray.indexOf(i) < 0) resultArray = [...resultArray, i];
    }
    return resultArray;
  };

  private printGrid = grid => {
    for (let i = 0; i < 9; i++) {
      let line = '';
      for (let j = 0; j < 9; j++) {
        const index = i * 9 + j;
        line = line + ' ' + grid[index];
      }
      console.log(line);
    }
  };
}
