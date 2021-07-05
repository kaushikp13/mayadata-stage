import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalMarketingEngineerComponent } from './technical-marketing-engineer.component';

describe('TechnicalMarketingEngineerComponent', () => {
  let component: TechnicalMarketingEngineerComponent;
  let fixture: ComponentFixture<TechnicalMarketingEngineerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalMarketingEngineerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalMarketingEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
