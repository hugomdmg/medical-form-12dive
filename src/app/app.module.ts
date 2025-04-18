import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './components/question/question.component';
import { SubquestionComponent } from './components/subquestion/subquestion.component';
import { SubmitComponent } from './components/submit/submit.component';
import { SignatureComponent } from './components/signature/signature.component';
import { MedicalComponent } from './components/medical/medical.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PersonalComponent } from './components/personal/personal.component';
import { RentalComponent } from './components/rental/rental.component';
import { SafeComponent } from './components/safe/safe.component';
import { PdfMedicalComponent } from './pdf/pdf-medical/pdf-medical.component';
import { PdfRentalComponent } from './pdf/pdf-rental/pdf-rental.component';
import { PdfSafeComponent } from './pdf/pdf-safe/pdf-safe.component';
import { PdfPersonalComponent } from './pdf/pdf-personal/pdf-personal.component';
import { RiskComponent } from './components/risk/risk.component';
import { PdfRiskComponent } from './pdf/pdf-risk/pdf-risk.component';

const routes: Routes = [
  { path: '', component: MedicalComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'rental', component: RentalComponent },
  { path: 'safe', component: SafeComponent },
  {path: 'risk', component: RiskComponent}

]

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    SubquestionComponent,
    SubmitComponent,
    SignatureComponent,
    MedicalComponent,
    NavBarComponent,
    PersonalComponent,
    RentalComponent,
    SafeComponent,
    PdfMedicalComponent,
    PdfRentalComponent,
    PdfSafeComponent,
    PdfPersonalComponent,
    RiskComponent,
    PdfRiskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
