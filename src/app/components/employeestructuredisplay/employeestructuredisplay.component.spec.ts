import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeestructuredisplayComponent } from './employeestructuredisplay.component';

describe('EmployeestructuredisplayComponent', () => {
  let component: EmployeestructuredisplayComponent;
  let fixture: ComponentFixture<EmployeestructuredisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeestructuredisplayComponent]
    });
    fixture = TestBed.createComponent(EmployeestructuredisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
