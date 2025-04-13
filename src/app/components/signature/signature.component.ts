import { Component, ElementRef, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements AfterViewInit {
  @ViewChild('signatureCanvas', { static: true }) signatureCanvas!: ElementRef;
  @Output() signatureCaptured = new EventEmitter<string>();

  signaturePad!: SignaturePad;

  constructor() { }
  ngAfterViewInit(): void {
    const canvas = this.signatureCanvas.nativeElement;
    this.signaturePad = new SignaturePad(canvas, {
      penColor: 'black',
      minWidth: 2,
      maxWidth: 5
    });

    canvas.addEventListener('click', (event: MouseEvent) => {
      this.saveSignature();
    });

    canvas.addEventListener('touchmove', (event: TouchEvent)=>{
      this.saveSignature()
    })

  }

  clearSignature(): void {
    this.signaturePad.clear();
  }

  saveSignature(): void {
    const signatureData = this.signaturePad.isEmpty() ? null : this.signaturePad.toDataURL();
    if (signatureData) {
      this.signatureCaptured.emit(signatureData);
    }
  }

}
