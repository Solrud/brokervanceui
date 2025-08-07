import { Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {IIntersection, IntersectionService} from "../../shared/intersection-fade/intersection.service";
import {ModalOpenService} from "../../shared/modal-open/modal-open.service";
import {EventService} from "../../shared/event/event.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  animations: [
    trigger('fadeIn', [
      state('invisible', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('invisible => visible', animate('0.6s ease-in'))
    ])
  ]
})
export class ContactComponent {
  sectionsVisibleList: IIntersection[] = [];

  constructor(private intersectionService: IntersectionService) {
    this.sectionsVisibleList = this.intersectionService.sectionsVisibleList;
  }

  onChangeSectionVisible(index: number, isVisible: boolean) {
    this.intersectionService.onChangeSectionVisible(index, isVisible);
  }
}
