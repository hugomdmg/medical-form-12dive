import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  questions: any = undefined
  name = ""

  constructor(private translate: TranslateService, private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe(questions => {
      if (questions) { this.questions = questions }
    })
    this.questionsService.name$.subscribe(name => { this.name = name })
  }

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value
    this.questionsService.updateName(name)
  }

  updateAnswer(name: any, answer: any) {
    this.questionsService.updateAnswer(name, answer)
  }


  changeLanguage(language: string) {
    this.translate.use(language)
  }

}
