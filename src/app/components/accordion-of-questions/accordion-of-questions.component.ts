import {Component, Input, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-accordion-of-questions',
  templateUrl: './accordion-of-questions.component.html',
  styleUrls: ['./accordion-of-questions.component.css']
})
export class AccordionOfQuestionsComponent {

  @Input()
  question: string;

  @Input()
  answerString?: string;

  @Input()
  answerTemplateRef?: TemplateRef<unknown>;
}
