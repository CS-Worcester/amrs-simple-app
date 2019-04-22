import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsProgramEnrollmentComponent } from './patients-program-enrollment.component';

describe('PatientsProgramEnrollmentComponent', () => {
  let component: PatientsProgramEnrollmentComponent;
  let fixture: ComponentFixture<PatientsProgramEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientsProgramEnrollmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsProgramEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
