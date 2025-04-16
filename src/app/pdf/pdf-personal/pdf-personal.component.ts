import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-personal',
  templateUrl: './pdf-personal.component.html',
  styleUrls: ['./pdf-personal.component.css']
})
export class PdfPersonalComponent {
  @Input() questions: any = undefined;
  @Input() signature: string | null = null;
  @Input() name = ""
  data = new Date()
  date = `${this.data.getDate().toString().padStart(2, '0')} / ${this.data.getMonth().toString().padStart(2, '0')} / ${this.data.getFullYear()}`
}
