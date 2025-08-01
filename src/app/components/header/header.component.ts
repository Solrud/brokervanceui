import {Component} from '@angular/core';
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import {OffcanvasContentComponent} from "../offcanvas-content/offcanvas-content.component";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private canvasService: NgbOffcanvas,
              private scroller: ViewportScroller) {
  }


  onClickOpenOffcanvas(): void{
    this.canvasService.open(OffcanvasContentComponent,
      {
        position: 'end',
        backdropClass: "bg-primary-my",
        panelClass: "off-canvas"
      });
  }

  scrollToSection(sectionID: string) {
    this.scroller.scrollToAnchor(sectionID)
  }
}
