import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KafkaWorkloadPageComponent } from './kafka-workload-page.component';

describe('KafkaWorkloadPageComponent', () => {
  let component: KafkaWorkloadPageComponent;
  let fixture: ComponentFixture<KafkaWorkloadPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KafkaWorkloadPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KafkaWorkloadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
