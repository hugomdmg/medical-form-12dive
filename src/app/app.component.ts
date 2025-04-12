import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medical';
  questions = [
    {
      name: "question1",
      answer: undefined
    },
    {
      name: "question2",
      answer: undefined
    },
    {
      name: "question3",
      answer: undefined
    },
    {
      name: "question4",
      answer: undefined
    },
    {
      name: "question5",
      answer: undefined
    },
    {
      name: "question6",
      answer: undefined
    },
    {
      name: "question7",
      answer: undefined
    },
    {
      name: "question8",
      answer: undefined
    },
    {
      name: "question9",
      answer: undefined
    },
    {
      name: "question10",
      answer: undefined
    }

  ]

  constructor(private translate: TranslateService) { }


  updateAnswer(name:any, answer:any){
    this.questions.forEach(question => {
      if(question.name == name){
        question.answer = answer
      }
    })
  }


  changeLanguage(language: string) {
    this.translate.use(language)
  }

  sendAnswer(){
    console.log(this.questions)
  }
}
