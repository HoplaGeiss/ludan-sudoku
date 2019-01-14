import { Component, EventEmitter, Input, OnDestroy, OnInit } from '@angular/core';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withReadme } from 'storybook-readme';

import { nestedSudokuPuzzle } from '../sudoku.mocks';
import { nestedSudokuSolution } from './../sudoku.mocks';
import { SudokuService } from './../sudoku.service';
import { SudokuGridModule } from './sudoku-grid.module';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Sudoku Grid Component</h1>
      <ludan-sudoku-grid
        [verifyEvent]="verifyEvent"
        [displaySolution]="solution"
        [nestedSudokuSolution]="nestedSudokuSolution"
        [nestedSudokuPuzzle]="nestedSudokuPuzzle"
      ></ludan-sudoku-grid>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  @Input() verify: boolean;
  @Input() solution: boolean;

  nestedSudokuPuzzle: number[][];
  nestedSudokuSolution: number[][];
  verifyEvent = new EventEmitter();

  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    setTimeout(() => this.verifyEvent.emit(this.verify));
    this.nestedSudokuPuzzle = nestedSudokuPuzzle;
    this.nestedSudokuSolution = nestedSudokuSolution;
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

storiesOf('Sudoku', module)
  .addDecorator(withKnobs)
  .add(
    'Grid',
    withReadme(readme, () => ({
      moduleMetadata: {
        imports: [SudokuGridModule],
        providers: SudokuService,
        declarations: [MockComponent]
      },
      props: {
        verify: boolean('Verify', false),
        solution: boolean('Solution', false)
      },
      template: `
      <ludan-story [verify]='verify' [solution]='solution'></ludan-story>
    `
    }))
  );
