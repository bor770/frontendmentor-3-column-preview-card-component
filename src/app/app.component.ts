import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { Card } from './card/card.model';
import { CardComponent } from './card/card.component';

@Component({
  imports: [CommonModule, CardComponent],
  selector: 'app-root',
  standalone: true,
  styleUrls: ['./app.component.css'],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = '3-column-preview-card-component';
  cards: Card[] = [
    {
      color: `bright-orange`,
      text: `Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.`,
      title: `sedans`,
    },
    {
      color: `dark-cyan`,
      text: `Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.`,
      title: `suvs`,
    },
    {
      color: `very-dark-cyan`,
      text: `Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.`,
      title: `luxury`,
    },
  ];
}
