import {Component, Input} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {fakeAsync} from "@angular/core/testing";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  animations: [
    trigger('fadeIn', [
      state('invisible', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('invisible => visible', animate('0.6s ease-in'))
    ])
  ]
})
export class ContactFormComponent {
  @Input()
  isFormForMainPage: boolean = true;
}
