import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.scss']
})
export class FormHeroComponent implements OnInit {
  constructor() {}
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;


  // tslint:disable-next-line: no-magic-numbers
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');


  onSubmit() {
    this.submitted = true;
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }


  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  ngOnInit() {}
}
