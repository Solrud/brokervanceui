import {Component, inject} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-greetings',
  templateUrl: './greetings-modal.component.html',
  styleUrls: ['./greetings-modal.component.css']
})
export class GreetingsModalComponent {
  activeModal = inject(NgbActiveModal);
}
