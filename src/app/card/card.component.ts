import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { Card } from './card.model';

@Component({
  imports: [CommonModule, MatButtonModule, MatCardModule],
  selector: 'app-card',
  standalone: true,
  styleUrls: ['./card.component.css'],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() card: Card;
}
