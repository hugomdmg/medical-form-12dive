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
  name = ""

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    // this.questionsService.questions$.subscribe(questions => {
    //   if (questions) { this.questions = questions }
    // })
    // this.questionsService.name$.subscribe(name => { this.name = name })
    this.questions = questions
  }

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value
    this.questionsService.updateName(name)
  }

  updateAnswer(name: any, answer: any) {
    this.questionsService.updateAnswer(name, answer)
  }

}
