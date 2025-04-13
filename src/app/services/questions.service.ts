import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import questions from 'src/assets/questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  name = ""
  private nameSource = new BehaviorSubject<string>(this.name);
  private questionsSource = new BehaviorSubject<any[]>(questions);

  name$ = this.nameSource.asObservable()
  questions$ = this.questionsSource.asObservable();

  updateName(name: string) {
    this.nameSource.next(name)
  }

  updateAnswer(name: string, answer: boolean) {
    const current = this.questionsSource.value;

    current.forEach(question => {
      if (question.name == name) {
        question.answer = answer
      }
      else {
        if (question.subquestions) {
          question.subquestions.forEach((element: any) => {
            if (element.name == name) {
              element.answer = answer
            }
          });
        }
      }
    })
    this.questionsSource.next([...current]);
  }
}