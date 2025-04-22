import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

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
      this.questions = questions
    })
  }

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value
    this.questionsService.updateName(name)
  }

  updateAnswer(name: any, event: Event | string) {
    if(event instanceof Event){
      this.questionsService.updatePersonalQuestions(name, (event.target as HTMLInputElement).value)

    }else{
      this.questionsService.updatePersonalQuestions(name, event)
    }
    if(name == "name" && event instanceof Event){
      this.updateName(event)
    }
  }

}
