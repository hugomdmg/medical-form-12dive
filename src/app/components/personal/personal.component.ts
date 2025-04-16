import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import questions from '../../../assets/personal_questions'

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent {
  questions: any = undefined

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.personal_questions$.subscribe(questions => {
      if (questions) { this.questions = questions }
    })
  }

  updateAnswer(name: any, event:Event) {
    this.questionsService.updatePersonalQuestions(name, (event.target as HTMLInputElement).value)
  }

}
