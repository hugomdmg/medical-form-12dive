import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-safe',
  templateUrl: './pdf-safe.component.html',
  styleUrls: ['./pdf-safe.component.css']
})
export class PdfSafeComponent {
  @Input() questions: any = undefined;
  @Input() signature: string | null = null;
  @Input() name = ""
  data = new Date()
  date = `${this.data.getDate().toString().padStart(2, '0')} / ${(this.data.getMonth() + 1).toString().padStart(2, '0')} / ${this.data.getFullYear()}`;

}
