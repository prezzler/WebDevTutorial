import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLog]',
  standalone: true,
  host:{
    '(click)': 'onLogClick($event)'
  }
})
export class LogDirective {
  private elementRef = inject(ElementRef)
  onLogClick(event: MouseEvent){
    console.log('Element clicked', this.elementRef.nativeElement);
  }

}
