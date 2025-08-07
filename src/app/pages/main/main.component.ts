import {Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {IIntersection, IntersectionService} from "../../shared/intersection-fade/intersection.service";
import {ModalOpenService} from "../../shared/modal-open/modal-open.service";
import {EventService} from "../../shared/event/event.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fadeIn', [
      state('invisible', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('invisible => visible', animate('0.6s ease-in'))
    ])
  ]
})
export class MainComponent implements OnInit{
  sectionsVisibleList: IIntersection[] = [];

  constructor(private intersectionService: IntersectionService,
              private modal: ModalOpenService,
              private event: EventService) {
    this.sectionsVisibleList = this.intersectionService.sectionsVisibleList;
  }

  ngOnInit()  {
    this._greetingCheck();
  }

  welcomeOpen(){
    this.modal.openGreetings()
      .dismissed
      .subscribe(() => this.event.setGreetingsShowed(true));
  }

  _greetingCheck(): void {
    this.event.getIsGreetingShowed$()
      .subscribe( isShowed => {
      if (!isShowed) this.welcomeOpen()
    })
  }

  onChangeSectionVisible(index: number, isVisible: boolean) {
    this.intersectionService.onChangeSectionVisible(index, isVisible);
  }
}
