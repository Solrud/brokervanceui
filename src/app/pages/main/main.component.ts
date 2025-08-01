import {Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {IIntersection, IntersectionService} from "../../shared/intersection-fade/intersection.service";

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

  constructor(private intersectionService: IntersectionService) {
    this.sectionsVisibleList = this.intersectionService.sectionsVisibleList;
  }

  ngOnInit()  {

  }

  onChangeSectionVisible(index: number, isVisible: boolean) {
    this.intersectionService.onChangeSectionVisible(index, isVisible);
  }
}
