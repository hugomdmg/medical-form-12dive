import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {


  @Input() question_text: string = ""
  @Output() eventEmitter = new EventEmitter()
  questions: any[] = []

  answer_yes: boolean = false;
  answer_no: boolean = false;

  constructor(private questionsService: QuestionsService) { }

  ngOnInit() {
    this.questionsService.questions$.subscribe(questions => {
      questions.forEach(question => {
        if (question.name == this.question_text) {
          this.questions = question.subquestions ? question.subquestions : undefined
        }
      })
    });
  }


  toggleAnswer(selected: string): void {
    if (selected === 'yes') {
      this.answer_no = false;
    } else if (selected === 'no') {
      this.answer_yes = false;
    }

    this.eventEmitter.emit(this.answer_yes)
  }

  updateSubanswer(data: any) {
    this.questionsService.updateAnswer(data.name, data.answer)
  }

}
