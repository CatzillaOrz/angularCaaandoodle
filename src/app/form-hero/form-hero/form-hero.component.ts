import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.scss']
})
export class FormHeroComponent implements OnInit {
  constructor() {}

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }
  heroForm: FormGroup;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];
  submitted = false;

  // tslint:disable-next-line: no-magic-numbers
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  hero = this.model;

  onSubmit() {
    this.submitted = true;
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }
  ngOnInit() {}
}
