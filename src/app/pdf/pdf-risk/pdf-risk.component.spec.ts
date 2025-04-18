import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfRiskComponent } from './pdf-risk.component';

describe('PdfRiskComponent', () => {
  let component: PdfRiskComponent;
  let fixture: ComponentFixture<PdfRiskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PdfRiskComponent]
    });
    fixture = TestBed.createComponent(PdfRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
