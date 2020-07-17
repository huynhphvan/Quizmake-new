import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  @Input() examQuizList: any = [
  ];

  answerLabels = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.examQuizList, event.previousIndex, event.currentIndex);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
