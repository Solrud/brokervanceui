import { Component } from '@angular/core';
import {NgbActiveOffcanvas} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-offcanvas-content',
  templateUrl: './offcanvas-content.component.html',
  styleUrls: ['./offcanvas-content.component.css']
})
export class OffcanvasContentComponent {
  constructor(public activeOffcanvas: NgbActiveOffcanvas) {
  }
}
