import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-subquestion',
  templateUrl: './subquestion.component.html',
  styleUrls: ['./subquestion.component.css']
})
export class SubquestionComponent {

  @Input() question_text: string = "question1_1"
  @Output() eventEmitter = new EventEmitter()

  answer: boolean = false;

  getAnswer(event:Event){
    const value = (event.target as HTMLInputElement).value
    console.log(value)
  }

}
