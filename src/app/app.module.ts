import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './pages/main/main.component';
import { OffcanvasContentComponent } from './components/offcanvas-content/offcanvas-content.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AccordionOfQuestionsComponent } from './components/accordion-of-questions/accordion-of-questions.component';
import {NgbAccordionModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OffcanvasContentComponent,
    ContactFormComponent,
    AccordionOfQuestionsComponent
  ],
  imports: [
    BrowserModule,
    NgbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
