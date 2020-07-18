import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizShareService {

  private quizList: any = new Subject();
 
  public get ValueFromChild() {
      return this.quizList;
  }
 
  public notifyValue(quiz) {
      this.quizList.next(quiz);
  }
  constructor() { }
}
