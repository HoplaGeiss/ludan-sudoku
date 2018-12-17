import { Component, Input } from '@angular/core';

@Component({
  selector: 'ludan-greeter',
  template: `
    <div>Hello {{ name }}</div>
  `
})
export class GreeterComponent {
  @Input() name = 'you!';
}
