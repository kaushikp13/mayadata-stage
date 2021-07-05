import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportpageComponent } from './supportpage.component';

describe('SupportpageComponent', () => {
  let component: SupportpageComponent;
  let fixture: ComponentFixture<SupportpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
