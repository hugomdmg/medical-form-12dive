import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent {


  @Input() question: string = ""
  @Input() question_text: string = ""
  @Output() eventEmitter = new EventEmitter()

  answer_yes: boolean = false;
  answer_no: boolean = false;

  toggleAnswer(selected: string): void {
    if (selected === 'yes') {
      this.answer_no = false;
    } else if (selected === 'no') {
      this.answer_yes = false;
    }

    this.eventEmitter.emit(this.answer_yes)
  }

}
