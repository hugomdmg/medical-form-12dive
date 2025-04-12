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

  constructor(private questionsService: QuestionsService) { }

  ngOnInit(): void {
    this.questionsService.questions$.subscribe(questions => {
      if (questions) {
        this.questions = questions;
      }
    });
  }

  captureSignature(signature: string): void {
    this.signature = signature;
  }

  async generatePDFfromHTML() {
    const element: any = document.getElementById('pdf-content');
    if (!element) { return; }

    const canvas = await html2canvas(element, { scale: 3, logging: true });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProps = pdf.getImageProperties(imgData);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

    pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);

    pdf.save('medical_form.pdf');
  }
}
