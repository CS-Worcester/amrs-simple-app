import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomNavigatiognComponent } from './bottom-navigatiogn.component';

describe('BottomNavigatiognComponent', () => {
  let component: BottomNavigatiognComponent;
  let fixture: ComponentFixture<BottomNavigatiognComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottomNavigatiognComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottomNavigatiognComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
