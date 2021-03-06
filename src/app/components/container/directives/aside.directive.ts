import { Directive, OnInit, OnChanges, Input, Self } from '@angular/core';
import { NgStyle } from '@angular/common';

@Directive({
  selector: '[mj-aside]',
  host: { class: 'mj-aside' },
  providers: [NgStyle]
})
export class MjAsideDirective implements OnInit, OnChanges {
  @Input() width: string = '300px';
  private hostStyles: { [key: string]: string };
  // tslint:disable-next-line: no-parameter-properties
  constructor(@Self() private ngStyle: NgStyle) { }
  private doCheck() {
    this.hostStyles = {
      width: this.width
    };
    this.ngStyle.ngStyle = this.hostStyles; // ngStyle: { [key: string]: string; } Write-only.

    this.ngStyle.ngDoCheck(); // ngDoCheck Applies the new styles if needed.


  }
  ngOnInit(): void {
    this.doCheck();
  }
  ngOnChanges(): void {
    this.doCheck();
  }
}
