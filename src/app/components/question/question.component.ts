import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import questions from 'src/assets/questions';

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

  ngOnInit(){
      questions.forEach(question => {
        if(question.name == this.question_text){
          this.questions = question.subquestions ? question.subquestions : []
        }
      })
  }


  toggleAnswer(selected: string): void {
    if (selected === 'yes') {
      this.answer_no = false;
    } else if (selected === 'no') {
      this.answer_yes = false;
    }

    this.eventEmitter.emit(this.answer_yes)
  }

  updateAnswer(){}

}
