import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css']
})
export class RiskComponent {
  questions = []
  name = ""

  constructor(private questionsService: QuestionsService) { }

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value
    this.questionsService.updateName(name)
  }
}
