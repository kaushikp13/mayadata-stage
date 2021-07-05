import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHeaderFooterLayoutComponent } from './no-header-footer-layout.component';

describe('NoHeaderFooterLayoutComponent', () => {
  let component: NoHeaderFooterLayoutComponent;
  let fixture: ComponentFixture<NoHeaderFooterLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoHeaderFooterLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoHeaderFooterLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
