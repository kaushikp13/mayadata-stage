import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownTemplateComponent } from './markdown-template.component';

describe('MarkdownTemplateComponent', () => {
  let component: MarkdownTemplateComponent;
  let fixture: ComponentFixture<MarkdownTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
