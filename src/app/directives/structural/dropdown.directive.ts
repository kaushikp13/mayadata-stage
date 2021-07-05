import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnChanges } from '@angular/core';

@Directive({
  selector: '[mdDropdown]'
})
export class DropdownDirective implements OnChanges {

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) { }

  @Input() set mdDropdown(isHidden: boolean) {
    if (!isHidden) {
      this.viewContainerRef.createEmbeddedView(this.templateRef)
    } else {
      this.viewContainerRef.clear();
    }
  }
  ngOnChanges() {
    // const condition = false;
    // if (condition) {
    //   this.viewContainerRef.createEmbeddedView(this.templateRef)
    // } else {
    //   this.viewContainerRef.clear();
    // }
  }
}
