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
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { IntersectionObserverDirective } from './shared/intersection-fade/intersection-observer.directive';
import {RouterLink, RouterModule, RouterOutlet, Routes} from "@angular/router";
import { GreetingsModalComponent } from './modal/greetings/greetings-modal.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'contacts', component: ContactComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    OffcanvasContentComponent,
    ContactFormComponent,
    AccordionOfQuestionsComponent,
    IntersectionObserverDirective,
    GreetingsModalComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    NgbAccordionModule,
    BrowserAnimationsModule,
    RouterLink,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
