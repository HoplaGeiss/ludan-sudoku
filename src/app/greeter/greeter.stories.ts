import { Component, OnDestroy, Input } from '@angular/core';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { GreeterModule } from './greeter.module';
import { withReadme } from 'storybook-readme';

const readme = require('./readme.md');

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 60%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Greeter</h1>
      <!-- prettier-ignore -->
      <ludan-greeter [name]="changeName ? 'you' : 'here'
      "></ludan-greeter>
    </div>
  `
})
class MockComponent implements OnDestroy {
  @Input() changeName: boolean;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

storiesOf('Greeter', module)
  .addDecorator(withKnobs)
  .add(
    'Default',
    withReadme(readme, () => ({
      moduleMetadata: {
        imports: [GreeterModule],
        declarations: [MockComponent]
      },
      props: {
        changeName: boolean('Change Name', false)
      },
      template: `
      <ludan-story [changeName]='changeName'></ludan-story>
    `
    }))
  );
