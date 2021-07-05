import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEngineerComponent } from './system-engineer.component';

describe('SystemEngineerComponent', () => {
  let component: SystemEngineerComponent;
  let fixture: ComponentFixture<SystemEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
