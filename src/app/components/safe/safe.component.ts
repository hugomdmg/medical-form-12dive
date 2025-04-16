import { Component } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-safe',
  templateUrl: './safe.component.html',
  styleUrls: ['./safe.component.css']
})
export class SafeComponent {
  questions = []
  name = ""

  constructor(private questionsService: QuestionsService) { }

  updateName(event: Event) {
    const name = (event.target as HTMLInputElement).value
    this.questionsService.updateName(name)
  }

}
