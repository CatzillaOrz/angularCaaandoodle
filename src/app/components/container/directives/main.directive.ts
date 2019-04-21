import { Directive } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';

@Directive({
  selector: 'mj-main',
  providers: [NgClass, NgStyle],
  host: { class: 'mj-mian' }
})
export class MjMainDirective { }
