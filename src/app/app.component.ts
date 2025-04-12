import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import questions from 'src/assets/questions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medical';
  questions = questions
  
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
