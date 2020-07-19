import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import * as d3 from "d3-array";

export interface ExamConfig {
  examName: string;
  numberOfCode: number;
  quizRandom: boolean;
  answerRandom: boolean;
}

@Component({
  selector: "app-create-exam-stepper",
  templateUrl: "./create-exam-stepper.component.html",
  styleUrls: ["./create-exam-stepper.component.scss"],
})
export class CreateExamStepperComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;

  panelOpenState = true;

  examList: any = [];
  chosenExamList: any = [];
  @Output() examListEvent = new EventEmitter<any>();

  examConfig: ExamConfig = {
    examName: "",
    numberOfCode: 1,
    quizRandom: false,
    answerRandom: false,
  };
  @Output() examConfigEvent = new EventEmitter<any>();

  constructor(private _formBuilder: FormBuilder) {}

  createExam() {
    this.examList = [];
    const quizzes = this.chosenExamList;

    for (let code = 0; code < this.examConfig.numberOfCode; code++) {
      let editedQuizArray = [];
  
      for (let quiz of this.examConfig.quizRandom ? d3.shuffle(quizzes) : quizzes) {
        let answers = [];

        for(let answer of quiz.answers) 
          answers.push(answer);
        let correctString = answers[quiz.correct];

        let newQuiz = {
          point: '',
          question: '',
          answers: [],
          correct: 0,
        };
        

        newQuiz.point = quiz.point;
        newQuiz.question = quiz.question;
        newQuiz.answers = this.examConfig.answerRandom ?  d3.shuffle(answers) : answers;
        newQuiz.correct = newQuiz.answers.findIndex(ans => ans == correctString);
        editedQuizArray.push(newQuiz);
      }
      this.examList.push(editedQuizArray);
      this.panelOpenState = false;
    }

    this.examListEvent.emit(this.examList);
    this.examConfigEvent.emit(this.examConfig);
  }

  setExamList($event) {
    this.chosenExamList = $event;
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ["", Validators.required],
    });
  }
}
