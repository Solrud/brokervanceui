import {Directive, ElementRef, EventEmitter, OnInit, Output} from '@angular/core';

@Directive({
  selector: '[appIntersectionObserver]'
})
export class IntersectionObserverDirective implements OnInit{
  private observer: IntersectionObserver;

  @Output()
  visible = new EventEmitter<boolean>();

  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting)
          this.visible.emit(entry.isIntersecting);
      },
      { threshold: 0.1 } // Элемент считается видимым, когда 10% его площади в зоне видимости
    );

    this.observer.observe(this.element.nativeElement);
  }

  // ngOnDestroy() {
  //   if (this.observer) {
  //     this.observer.disconnect();
  //   }
  // }
}
