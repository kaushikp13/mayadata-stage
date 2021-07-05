import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenebsSupportComponent } from './openebs-support.component';

describe('OpenebsSupportComponent', () => {
  let component: OpenebsSupportComponent;
  let fixture: ComponentFixture<OpenebsSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenebsSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenebsSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
