import { CreateExamStepperComponent } from './create-exam-stepper/create-exam-stepper.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-exam-management',
  templateUrl: './exam-management.component.html',
  styleUrls: ['./exam-management.component.scss']
})
export class ExamManagementComponent implements OnInit {

  examConfig: any = {
    examName: '',
    numberOfCode: 1,
    quizRandom: false,
    answerRandom: false
  }

  examQuizList: any = [

  ];

  constructor() { }

  counter(i: number) {
    return new Array(i);
  }

  setExamList($event) {
    this.examQuizList = $event;
  }


  setExamConfig($event) {
    this.examConfig = $event;
  }

  ngOnInit(): void {
  }

}
