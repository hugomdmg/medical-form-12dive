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
    if (this.checkComplet()) {
      this.creating = true;
  
      const element: any = document.getElementById('pdf-content');
      if (!element) return;
  
      const canvas = await html2canvas(element, { scale: 2 });
      const imgSrc = canvas.toDataURL('image/png');
  
      const img = new Image();
      img.src = imgSrc;
  
      img.onload = async () => {
        const pdf = new jsPDF('p', 'mm', 'a4');
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
  
        const imgProps = {
          width: img.width,
          height: img.height
        };
  
        const imgWidth = pdfWidth;
        const imgHeight = (imgProps.height * imgWidth) / imgProps.width;
  
        let position = 0;
        let pageHeightLeft = imgHeight;
  
        while (pageHeightLeft > 0) {
          pdf.addImage(img, 'PNG', 0, position ? -position : 0, imgWidth, imgHeight);
          
          pageHeightLeft -= pdfHeight;
  
          if (pageHeightLeft > 0) {
            pdf.addPage();
            position += pdfHeight;
          }
        }
  
        const pdfBlob = pdf.output('blob');
        const blob = new Blob([pdfBlob], { type: 'application/pdf' });
        saveAs(blob, `medical_form_${this.name}.pdf`);
  
        this.creating = false;
      };
    }
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

    // return !(this.show_alert || this.show_alert_name || this.show_alert_signature);
    return true
  }

}
