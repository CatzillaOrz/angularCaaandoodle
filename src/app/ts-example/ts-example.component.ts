import { Component, OnInit } from '@angular/core';
import { Truck, Accessory, Engine } from '../practice-demo/classExtention';

@Component({
  selector: 'app-ts-example',
  templateUrl: './ts-example.component.html',
  styleUrls: ['./ts-example.component.scss']
})
export class TsExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Ref to ../practice-demo/classExtention
    // window.onload = function () {
    var truck = new Truck(
      40000,
      new Engine(300, 'V8'),
      'Chevy',
      'Silverado',
      'Long Bed',
      true
    );
    truck.addAccessories(
      new Accessory(1234, 'Sunroof'),
      new Accessory(4321, 'Towing package')
    );
    truck.engine.start((status: boolean, engineType: string) => {
      document.getElementById('container').innerHTML =
        engineType + ' was started';
    });
    // };
  }
}
