import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import questions from 'src/assets/questions';
import personal_questions from 'src/assets/personal_questions';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  name = ""
  private nameSource = new BehaviorSubject<string>(this.name);
  private questionsSource = new BehaviorSubject<any[]>(questions);
  private personal_questionsSource = new BehaviorSubject<any[]>(personal_questions)

  name$ = this.nameSource.asObservable()
  questions$ = this.questionsSource.asObservable();
  personal_questions$ = this.personal_questionsSource.asObservable()

  updateName(name: string) {
    this.nameSource.next(name)
  }

  updateAnswer(name: string, answer: boolean) {
    this.update(name, answer, this.questionsSource)
  }

  updatePersonalQuestions(name:string, answer:string){
    this.update(name, answer, this.personal_questionsSource)
  }

  private update(name:string, answer:string | boolean, questionsSource:any){
    const current = questionsSource.value;

    current.forEach((question: { name: string; answer: string | boolean; options: any[]; subquestions:any[]}) => {
      if (question.name == name) {
        question.answer = answer
      }
      else {
        if (question.options) {
          question.options.forEach((element: any) => {
            if (element.name == name) {
              element.answer = answer
            }
          });
        }
        if(question.subquestions){
          question.subquestions.forEach((element: any) => {
            if (element.name == name) {
              element.answer = answer
            }
          });
        }
      }
    })
    questionsSource.next([...current]);
  }
}