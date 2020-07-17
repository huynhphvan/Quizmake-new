import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-choose-quiz',
  templateUrl: './choose-quiz.component.html',
  styleUrls: ['./choose-quiz.component.scss']
})
export class ChooseQuizComponent implements OnInit {
  quizList: any = [
    {
      point: "(1 pount)",
      question: "What is the scientific name of a butterfly?",
      answers: ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      correct: 3,
    },
    {
      point: "(1 pount)",
      question: "How hot is the surface of the sun?",
      answers: ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
      correct: 0,
    },
    {
      point: "(1 pount)",
      question: "Who are the actors in The Internship?",
      answers: [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson",
      ],
      correct: 1,
    },
    {
      point: "(1 pount)",
      question: "What is the capital of Spain?",
      answers: ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
      correct: 2,
    },
  ];

  chosenExamList: any = [];
  @Output() chosenExamListEvent = new EventEmitter<any>();


  constructor() { }
  
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.chosenExamListEvent.emit(this.chosenExamList);
  }
  ngOnInit(): void {
    this.chosenExamListEvent.emit(this.chosenExamList);
  }

}
