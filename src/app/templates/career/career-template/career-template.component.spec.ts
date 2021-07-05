import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CareerTemplateloadComponent } from './career-template.component';


describe('CareerTemplateloadComponent', () => {
  let component: CareerTemplateloadComponent;
  let fixture: ComponentFixture<CareerTemplateloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CareerTemplateloadComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerTemplateloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
