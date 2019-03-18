import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../../heroes/hero';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../../heroes/hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero: Hero;
  constructor(
    // tslint:disable-next-line: no-parameter-properties
    private route: ActivatedRoute,
    // tslint:disable-next-line: no-parameter-properties
    private heroService: HeroService,
    // tslint:disable-next-line: no-parameter-properties
    private router: Router,
    // tslint:disable-next-line: no-parameter-properties
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  // gotoHeroes(hero: Hero) {
  //   let heroId = hero ? hero.id : null;
  //   // Pass along the hero id if available
  //   // so that the HeroList component can select that hero.
  //   // Include a junk 'foo' property for fun.
  //   this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
  // }
  gotoHeroes(hero: Hero) {
    let heroId = hero ? hero.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/superheroes', { id: heroId, foo: 'foo' }]);
  }

  goBack(): void {
    this.location.back();
  }
}
