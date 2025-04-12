import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subquestion',
  templateUrl: './subquestion.component.html',
  styleUrls: ['./subquestion.component.css']
})
export class SubquestionComponent implements OnInit {

  @Input() question_text: string = ""
  @Output() eventEmitter = new EventEmitter()

  answer: boolean = false;

  ngOnInit(){
  }

  getAnswer() {
    const value = {
      name: this.question_text,
      answer: this.answer
    }
    this.eventEmitter.emit(value)
  }

}
