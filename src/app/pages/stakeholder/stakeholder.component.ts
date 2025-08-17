import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {StakeholderTypeEnum} from "../../shared/routing/stakeholder-type.enum";

@Component({
  selector: 'app-stakeholder',
  templateUrl: './stakeholder.component.html',
  styleUrls: ['./stakeholder.component.css']
})
export class StakeholderComponent {

  stakeHolderType: StakeholderTypeEnum;

  constructor(private route: ActivatedRoute) {
    this.stakeHolderType = this.route.snapshot.data['staker']
  }

  protected readonly StakeholderTypeEnum = StakeholderTypeEnum;
}
