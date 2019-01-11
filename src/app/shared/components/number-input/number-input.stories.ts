import { Component, OnDestroy } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withReadme } from 'storybook-readme';

import { NumberInputModule } from './number-input.module';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Number Input</h1>
      <input ludan-number-input />
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

storiesOf('Shared', module).add(
  'Number Input',
  withReadme(readme, () => ({
    moduleMetadata: {
      imports: [NumberInputModule],
      declarations: [MockComponent]
    },
    template: `
      <ludan-story></ludan-story>
    `
  }))
);
