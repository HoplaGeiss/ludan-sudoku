import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberInputDirective } from './number-input.directive';

@Component({
  template: `
    <input ludan-number-input />
  `
})
class TestComponent {}

fdescribe('NumberInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NumberInputDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  it('creates', () => {
    fixture.detectChanges();
    const input = fixture.debugElement.nativeElement.querySelector('input');
    expect(input).toBeDefined();
  });

  it('Allows numbers', () => {});

  it('Does not allow letters', () => {});
});
