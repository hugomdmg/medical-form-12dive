import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-risk',
  templateUrl: './pdf-risk.component.html',
  styleUrls: ['./pdf-risk.component.css']
})
export class PdfRiskComponent {
  @Input() questions: any = undefined;
  @Input() signature: string | null = null;
  @Input() name = ""
  data = new Date()
  date = `${this.data.getDate().toString().padStart(2, '0')} / ${(this.data.getMonth() + 1).toString().padStart(2, '0')} / ${this.data.getFullYear()}`;

}
