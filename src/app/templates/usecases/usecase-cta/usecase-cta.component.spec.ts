import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsecaseCtaComponent } from './usecase-cta.component';

describe('UsecaseCtaComponent', () => {
  let component: UsecaseCtaComponent;
  let fixture: ComponentFixture<UsecaseCtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsecaseCtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsecaseCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
