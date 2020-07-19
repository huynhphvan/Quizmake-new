import { Component, OnInit, Input, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {MatAccordion} from '@angular/material/expansion';
import { Packer } from "docx";
import { DocumentCreator } from "./docx-generator";
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-exam-list',
  templateUrl: './exam-list.component.html',
  styleUrls: ['./exam-list.component.scss']
})
export class ExamListComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  
  @Input() examQuizList: any = [
  ];
  @Input() examNumber: number;
  answerLabels = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.examQuizList, event.previousIndex, event.currentIndex);
  }

  public downloadExam(): void {
    const documentCreator = new DocumentCreator();
    const doc = documentCreator.create(this.examQuizList, this.examNumber);

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `Đề số ${this.examNumber}.docx`);
    });
  }

  public downloadAnswer(): void {
    const documentCreator = new DocumentCreator();
    const labels = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    const answerList = this.examQuizList.map(quiz => labels[quiz.correct]);
    const doc = documentCreator.createAnswer(answerList, this.examNumber);

    Packer.toBlob(doc).then(blob => {
      saveAs(blob, `Đáp án đề số ${this.examNumber}.docx`);
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
