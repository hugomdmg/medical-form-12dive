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
    if(this.checkComplet()){
      this.creating = true
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
      this.creating = false
    }
  }

  checkComplet():boolean{
    let response = true
    this.questions.forEach((element: any) => {
      if(element.answer === undefined){
        this.show_alert = true
        response = false
      }else{
        this.show_alert = false
      }
    });
    if(!this.name){
      response = false
      this.show_alert_name = true
    }else{
      this.show_alert_name = false
    }
    return response
  }
}
