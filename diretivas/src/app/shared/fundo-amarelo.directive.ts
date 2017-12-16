import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {
  // Evitar usar ElementRef diretamente, utilizar o Renderer
  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    console.log(this._renderer);
    this._renderer.setElementStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
    /*console.log(this._elementRef);
    const element: HTMLElement = this._elementRef.nativeElement;

    element.style.backgroundColor = 'yellow';
    element.style.padding = '5px';*/
  }
}
