import { Component } from '@angular/core';
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {OffcanvasContentComponent} from "../offcanvas-content/offcanvas-content.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private canvasService: NgbOffcanvas) {
  }


  onClickOpenOffcanvas(): void{
    this.canvasService.open(OffcanvasContentComponent,
      {
        position: 'end',
        backdropClass: "bg-primary-my",
        panelClass: "off-canvas"
      });
  }
}
