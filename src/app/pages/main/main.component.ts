import {Component, OnInit} from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('fadeIn', [
      state('invisible', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('invisible => visible', animate('0.8s ease-in'))
    ])
  ]
})
export class MainComponent implements OnInit{
  sectionsVisibleList: {id: number, visible: boolean}[] = [];

  ngOnInit()  {
    for(let i = 0; i <= 20; i++){
      this.sectionsVisibleList.push({id: i, visible: false})
    }
  }

  onChangeSectionVisible(index: number, isVisible: boolean) {
    this.sectionsVisibleList[index].visible = isVisible;
  }
}
