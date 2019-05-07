import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseFormDialogComponent } from './close-form-dialog.component';

describe('CloseFormDialogComponent', () => {
  let component: CloseFormDialogComponent;
  let fixture: ComponentFixture<CloseFormDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseFormDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseFormDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
