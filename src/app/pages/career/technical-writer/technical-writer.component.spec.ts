import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalWriterComponent } from './technical-writer.component';

describe('TechnicalWriterComponent', () => {
  let component: TechnicalWriterComponent;
  let fixture: ComponentFixture<TechnicalWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
