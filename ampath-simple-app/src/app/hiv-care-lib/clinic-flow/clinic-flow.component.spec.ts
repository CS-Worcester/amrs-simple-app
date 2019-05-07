import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicFlowComponent } from './clinic-flow.component';

describe('ClinicFlowComponent', () => {
  let component: ClinicFlowComponent;
  let fixture: ComponentFixture<ClinicFlowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicFlowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
