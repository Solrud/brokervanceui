import {Component, OnInit} from '@angular/core';
import {ModalOpenService} from "./shared/modal-open/modal-open.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {class: 'd-flex h-100 w-100 flex-column bg-main-my'}
})
export class AppComponent implements OnInit{
  constructor(private modal: ModalOpenService) {
  }

  ngOnInit() {
    this.welcomeOpen();
  }

  welcomeOpen(){
    this.modal.openGreetings();
  }
}
