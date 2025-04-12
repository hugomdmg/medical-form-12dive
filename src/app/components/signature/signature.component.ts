import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-signature',
  templateUrl: './signature.component.html',
  styleUrls: ['./signature.component.css']
})
export class SignatureComponent implements OnInit {
  @ViewChild('signatureCanvas', { static: true }) signatureCanvas!: ElementRef;
  @Output() signatureCaptured = new EventEmitter<string>();

  signaturePad!: SignaturePad;

  constructor() { }

  ngOnInit(): void {
    const canvas = this.signatureCanvas.nativeElement;
    this.signaturePad = new SignaturePad(canvas);

    this.signaturePad.penColor = 'black';
    this.signaturePad.minWidth = 2;
    this.signaturePad.maxWidth = 5;
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
