import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateExamStepperComponent } from './create-exam-stepper.component';

describe('CreateExamStepperComponent', () => {
  let component: CreateExamStepperComponent;
  let fixture: ComponentFixture<CreateExamStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateExamStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExamStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
