import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent {
  name = ""
  questions = [{
    name: 'days',
    answer: ''
  }]

  updateAnswer(event:Event){
    this.questions[0].answer = (event.target as HTMLInputElement).value
  }

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value
    this.questionsService.updateName(name)
  }


  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.name$.subscribe(name => {
      this.name = name
    })
  }

 
}
