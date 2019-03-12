import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { ClassExtention } from '../practice-demo/classExtention';
import { DefiningClasses } from '../practice-demo/defineClasses';

@Component({
  selector: 'app-ts-example',
  templateUrl: './ts-example.component.html',
  styleUrls: ['./ts-example.component.scss']
})
export class TsExampleComponent implements OnInit {
  constructor(public messageService: MessageService) {
    let dc = DefiningClasses;
    let ce = ClassExtention;
  }

  ngOnInit() {
    this.messageService.clear();

  }


}
