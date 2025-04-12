import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import questions from 'src/assets/questions';
import { QuestionsService } from './services/questions.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'medical';
  questions:any = undefined
  
  constructor(private translate: TranslateService, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe(questions => {
      if(questions){
        this.questions = questions
      }
    })
  }

  updateAnswer(name:any, answer:any){
    this.questionsService.updateAnswer(name, answer)
  }


  changeLanguage(language: string) {
    this.translate.use(language)
  }

  sendAnswer(){
    console.log(this.questions)
  }
}
