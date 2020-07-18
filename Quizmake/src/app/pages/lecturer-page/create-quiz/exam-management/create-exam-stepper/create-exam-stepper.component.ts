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
    for (let i = 0; i < this.examConfig.numberOfCode; i++) {
      let arrayOfQuiz = Array.from(this.chosenExamList);

      if (this.examConfig.quizRandom) {
        arrayOfQuiz = d3.shuffle(arrayOfQuiz, 0, arrayOfQuiz.length);
      }

      if (this.examConfig.answerRandom) {
        arrayOfQuiz.map((quiz: any) => {
          // console.log(d3.shuffle(quiz.answers, 0, quiz.answers.length));
          let answers = Array.from(quiz.answers);
          return {
            point: quiz.point,
            question: quiz.question,
            answers: d3.shuffle(answers, 0, answers.length),
          };
        });
      }

      this.examList.push(arrayOfQuiz);
    }

    console.log(this.examList);

    // this.examListEvent.emit(this.examList);
    // this.examConfigEvent.emit(this.examConfig);
  }

  setExamList($event) {
    this.chosenExamList = [...$event];
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
