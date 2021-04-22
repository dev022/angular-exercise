import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector:'[highlight-textDirective]'
})

export class exedirDirective implements OnInit{

  constructor(private elementRef:ElementRef ){}

  ngOnInit(){
    // highlight the text
    let data = Array.from(this.elementRef.nativeElement.children);
    data.map((element:any) => { 
      // find children, check span tag exist
      element.style.backgroundColor = element.localName ==  "span" ?  "red": "none"; // give background to span, others none
    });
  }
}
