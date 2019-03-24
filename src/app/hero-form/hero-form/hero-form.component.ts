import { Component, OnInit } from '@angular/core';
import { Hero } from '../../hero';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { forbiddenNameValidator } from '../../shared/forbidden-name.directive';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;

  heroForm: FormGroup;
  hero = { name: 'Dr.', alterEgo: 'Dr. What', power: this.powers[0] };

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }
  newHero() {
    this.model = new Hero(42, '', '');
  }

  OnInit(): void {
    this.heroForm = new FormGroup({
      name: new FormControl(this.hero.name, [
        Validators.required,
        Validators.minLength(4),
        forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
      ]),
      alterEgo: new FormControl(this.hero.alterEgo),
      power: new FormControl(this.hero.power, Validators.required)
    });
  }

  get name() {
    return this.heroForm.get('name');
  }

  get power() {
    return this.heroForm.get('power');
  }
}
