import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(Element:ElementRef) 
  
  {

    Element.nativeElement.innerText="Bonjour a tous";
   }

}
