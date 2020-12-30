import { Directive, ElementRef, HostListener, ɵConsole } from '@angular/core';

//this is custom directives
@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el: ElementRef) { }

  @HostListener('focus')onFocus(){
    console.log("On Focus");
  }

  @HostListener('blur')onBlur(){
    console.log("On blur");
    let val:string= this.el.nativeElement.value;
    this.el.nativeElement.value=val.toLowerCase();
    console.log(this.el.nativeElement.value);
  }

}
