import { Component, OnDestroy } from '@angular/core';
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withReadme } from 'storybook-readme';

import { SudokuSettingsModule } from './sudoku-settings.module';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Sudoku Settings Component</h1>
      <ludan-sudoku-settings></ludan-sudoku-settings>
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
    'Settings',
    withReadme(readme, () => ({
      moduleMetadata: {
        imports: [SudokuSettingsModule],
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
