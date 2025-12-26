import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pdf-rental',
  templateUrl: './pdf-rental.component.html',
  styleUrls: ['./pdf-rental.component.css']
})
export class PdfRentalComponent {
  @Input() questions: any = undefined;
  @Input() signature: string | null = null;
  @Input() name = ""
  data = new Date()
  date = `${this.data.getDate().toString().padStart(2, '0')} / ${(this.data.getMonth() + 1).toString().padStart(2, '0')} / ${this.data.getFullYear()}`;
}
