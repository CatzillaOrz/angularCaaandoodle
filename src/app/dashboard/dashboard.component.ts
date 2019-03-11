import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { Truck, Accessory, Engine } from '../practice-demo/classExtention';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.scss' ]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();

    // Ref to ../practice-demo/classExtention
    window.onload = function () {
      var truck = new Truck(40000, new Engine(300, 'V8'), 'Chevy', 'Silverado',
                           'Long Bed', true);
      truck.addAccessories(new Accessory(1234, 'Sunroof'), new Accessory(4321, 'Towing package'));
      truck.engine.start((status: boolean, engineType: string) => {
          document.getElementById('container').innerHTML = engineType + ' was started';
      });
    };

  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
