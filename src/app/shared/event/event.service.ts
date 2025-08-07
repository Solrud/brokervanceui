import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private isGreetingsShowed$ = new BehaviorSubject<boolean>(false);
  setGreetingsShowed(isShowed: boolean): void {
    this.isGreetingsShowed$.next(isShowed);
  }
  getIsGreetingShowed$() {
    return this.isGreetingsShowed$.asObservable();
  }
}
