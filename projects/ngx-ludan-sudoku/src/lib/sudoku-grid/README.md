# Sudoku Grid Component

## Usage

```typescript
<ludan-sudoku-grid
  [nestedSudokuPuzzle]="nestedSudokuPuzzle"
  [nestedSudokuSolution]="nestedSudokuSolution"
  [verifyEvent]="verifyEvent"
  [displaySolution]="displaySolution">
</ludan-sudoku-grid>
```

- `nestedSudokuPuzzle` is an array of 9 arrays representing the initial sudoku puzzle.
- `nestedSudokuSolution` is an array of 9 array representing the sudoku solution.
- `verifyEvent` is an eventEmitter that alerts the component to check which input are correct and which are wrong and apply styling accordingly.
- `displaySolution` is a boolean that tells the component to diplay the solution.
