import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MayaDataBenefitsComponent } from './mayadata-benefits.component';


describe('MayaDataBenefitsComponent', () => {
  let component: MayaDataBenefitsComponent;
  let fixture: ComponentFixture<MayaDataBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MayaDataBenefitsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MayaDataBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
