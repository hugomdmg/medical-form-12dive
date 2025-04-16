import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-medical',
  templateUrl: './pdf-medical.component.html',
  styleUrls: ['./pdf-medical.component.css']
})
export class PdfMedicalComponent {
  @Input() questions: any = undefined;
  @Input() signature: string | null = null;
  @Input() name = ""
  data = new Date()
  date = `${this.data.getDate().toString().padStart(2, '0')} / ${this.data.getMonth().toString().padStart(2, '0')} / ${this.data.getFullYear()}`
}
