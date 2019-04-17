import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mj-aside',
  template: `
  <mj-aside></mj-aside>
  `,
  styles: ['./name.component.scss']
})
export class NameComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }
}
