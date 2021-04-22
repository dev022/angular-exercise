import {Directive,ElementRef,Renderer2} from '@angular/core';

@Directive({
  selector:'[highlight-textDirective]'
})

export class exedirDirective{
  constructor(elementRef:ElementRef , renderer:Renderer2){
    elementRef.nativeElement.style.backgroundColor = "red";
    //let findSpan = elementRef.nativeElement.querySelector('span');

    //renderer.setStyle(findSpan,'color','red');
    }
}
