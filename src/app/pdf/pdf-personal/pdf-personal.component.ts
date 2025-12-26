import { Component, Input } from '@angular/core';
import personal_questions from 'src/assets/personal_questions';

@Component({
  selector: 'app-pdf-personal',
  templateUrl: './pdf-personal.component.html',
  styleUrls: ['./pdf-personal.component.css']
})
export class PdfPersonalComponent {
  @Input() questions: any = personal_questions;
  @Input() signature: string | null = null;
  @Input() name = ""
  data = new Date()
  date = `${this.data.getDate().toString().padStart(2, '0')} / ${(this.data.getMonth() + 1).toString().padStart(2, '0')} / ${this.data.getFullYear()}`;
}
