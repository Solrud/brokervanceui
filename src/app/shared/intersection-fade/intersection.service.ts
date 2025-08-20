import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IntersectionService {
  sectionsVisibleList: IIntersection[] = [];

  constructor() {
    for(let i = 0; i <= 20; i++){
      this.sectionsVisibleList.push({id: i, visible: false})
    }
  }

  onChangeSectionVisible(index: number, isVisible: IIntersection["visible"]) {
    this.sectionsVisibleList[index].visible = isVisible;
  }

  setVisibleToList(numList: number[]): void {
    numList.forEach(n => this.sectionsVisibleList[n].visible = false);
    this.sectionsVisibleList = [...this.sectionsVisibleList]
  }
}

export interface IIntersection{
  id: number;
  visible: boolean;
}
