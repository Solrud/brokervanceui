import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StakeholderTypeEnum} from "../../shared/routing/stakeholder-type.enum";
import {IIntersection, IntersectionService} from "../../shared/intersection-fade/intersection.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.css'],
  animations: [
    trigger('fadeIn', [
      state('invisible', style({ opacity: 0 })),
      state('visible', style({ opacity: 1 })),
      transition('invisible => visible', animate('0.6s ease-in'))
    ])
  ]
})
export class StakeholderComponent implements OnInit{
  sectionsVisibleList: IIntersection[] = [];
  stakeHolderType: StakeholderTypeEnum;
  isFirstTime: boolean = true;

  constructor(private route: ActivatedRoute,
              private intersectionService: IntersectionService) {



    // if (this.stakeHolderType != this.route.snapshot.data['staker']){
    //   if (!this.isFirstTime) console.log('test')
    //   this.isFirstTime = false;
    //
    // }

      // this.intersectionService.setVisibleToList([13, 14, 15, 16])


    this.sectionsVisibleList = this.intersectionService.sectionsVisibleList;
  }

  protected readonly StakeholderTypeEnum = StakeholderTypeEnum;

  onChangeSectionVisible(index: number, isVisible: boolean) {
    this.intersectionService.onChangeSectionVisible(index, isVisible);
  }


  ngOnInit() {
    this.route.data.subscribe( data => {
      if (this.stakeHolderType != data['staker'] && this.stakeHolderType){
        console.log(this.isFirstTime)
      }
      this.intersectionService.setVisibleToList([13, 14, 15, 16])


      this.stakeHolderType = data['staker'];
      console.log(this.stakeHolderType)
    })
  }
}
