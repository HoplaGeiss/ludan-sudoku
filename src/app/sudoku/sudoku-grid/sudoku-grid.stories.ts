import { Component, OnDestroy, Input } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { SudokuGridModule } from './sudoku-grid.module';
import { withReadme } from 'storybook-readme';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Sudoku Grid Component</h1>
      <ludan-sudoku-grid></ludan-sudoku-grid>
    </div>
  `
})
class MockComponent implements OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

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
        declarations: [MockComponent]
      },
      props: {
        // changeName: boolean('Change Name', false)
      },
      template: `
      <ludan-story></ludan-story>
    `
    }))
  );
