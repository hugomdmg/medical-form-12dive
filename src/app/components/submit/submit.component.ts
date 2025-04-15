import { Component, OnInit } from '@angular/core';
import { QuestionsService } from 'src/app/services/questions.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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
    const el = document.getElementById('pdf-content');
    if (!el) return;

    const canvas = await html2canvas(el, { scale: 1 });
    const imgData = canvas.toDataURL('image/jpeg');

    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfW = pdf.internal.pageSize.getWidth();
    const pdfH = pdf.internal.pageSize.getHeight();

    const img = new Image();
    img.src = imgData;

    img.onload = () => {
      const imgH = (img.height * pdfW) / img.width;
      let y = 0;

      while (y < imgH) {
        pdf.addImage(img, 'JPEG', 0, -y, pdfW, imgH);
        y += pdfH;
        if (y < imgH) pdf.addPage();
      }
      pdf.save(`medical_form_${this.name}.pdf`);
    };
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
    return !(this.show_alert || this.show_alert_name || this.show_alert_signature);
  }

}
