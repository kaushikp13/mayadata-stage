import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportEngineerComponent } from './support-engineer.component';

describe('SupportEngineerComponent', () => {
  let component: SupportEngineerComponent;
  let fixture: ComponentFixture<SupportEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
