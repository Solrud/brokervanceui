import { Injectable } from '@angular/core';
import {NgbModal, NgbModalConfig} from "@ng-bootstrap/ng-bootstrap";
import {GreetingsModalComponent} from "../../modal/greetings/greetings-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalOpenService {

  constructor(private ngbModal: NgbModal,
              private configModalDialog: NgbModalConfig) {
    configModalDialog.backdrop = true;
    configModalDialog.keyboard = false;
    configModalDialog.centered = true;
  }

  openGreetings() {
    const openGreetings = this.ngbModal.open(GreetingsModalComponent, {backdropClass: 'bg-modal'});

    return openGreetings;
  }
}
