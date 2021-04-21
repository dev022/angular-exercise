import {Directive,ElementRef} from '@angular/core';

@Directive({
  selector:'[app-exeDirective]'
})

export class exedirDirective{
  constructor(elementRef:ElementRef){
    elementRef.nativeElement.style.backgroundColor = "red";
  }
}
