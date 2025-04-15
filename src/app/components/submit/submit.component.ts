import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {
  title = 'medical';
  questions: any = undefined;
  signature: string | null = null;
  creating = false
  name = ""
  show_alert = false
  show_alert_name = false
  show_alert_signature = false
  date = new Date().toISOString().split('T')[0]

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe(questions => {
      if (questions) {
        this.questions = questions;
      }
    });
    this.questionsService.name$.subscribe(name => {
      this.name = name
    })
  }

  captureSignature(signature: string): void {
    this.signature = signature;
  }

  async generatePDFfromHTML() {
    if (!this.checkComplet()) return;

    this.creating = true;
    const element = document.getElementById('pdf-content');
    if (!element) return;

    // Capturamos el contenido como una imagen con html2canvas
    const canvas = await html2canvas(element, { scale: 0.8 });
    const imgHeight = canvas.height;
    const imgWidth = canvas.width;

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const ratio = pdfWidth / imgWidth;
    const pageHeightPx = pdfHeight / ratio;

    let position = 0;
    let page = 0;

    while (position < imgHeight) {
      // Crear canvas temporal para cada página
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = imgWidth;
      pageCanvas.height = Math.min(pageHeightPx, imgHeight - position);

      const pageCtx = pageCanvas.getContext('2d');
      if (pageCtx) {
        pageCtx.drawImage(
          canvas,
          0,
          position,
          imgWidth,
          pageCanvas.height,
          0,
          0,
          imgWidth,
          pageCanvas.height
        );

        const imgData = pageCanvas.toDataURL('image/png');
        if (page > 0) pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, (pageCanvas.height * pdfWidth) / imgWidth);
      }

      position += pageHeightPx;
      page++;
    }

    // ... todo igual hasta antes del save
    const pdfBlob = pdf.output('blob');
    saveAs(pdfBlob, `medical_form_${this.name}.pdf`);
    this.creating = false;

  }




  checkComplet(): boolean {
    this.show_alert = false;
    this.show_alert_name = false;
    this.show_alert_signature = false;

    const unanswered = this.questions.some((q: any) => q.answer === undefined);
    if (unanswered) {
      this.show_alert = true;
    }

    if (!this.name) {
      this.show_alert_name = true;
    }

    if (!this.signature) {
      this.show_alert_signature = true;
    }
    return true
    return !(this.show_alert || this.show_alert_name || this.show_alert_signature);
  }

}
