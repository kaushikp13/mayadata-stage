import { DropdownDirective } from './dropdown.directive';
import { TemplateRef, ViewContainerRef } from '@angular/core';
describe('DropdownDirective', () => {
  it('should create an instance', () => {
    const directive = new DropdownDirective(this.TemplateRef, this.ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
