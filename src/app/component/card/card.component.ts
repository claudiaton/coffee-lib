import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
title = "Coffee Name";
subtitle = "Coffee Variety";
content = "Coffee notes";
details = ["Coffee Origin", "Coffee intensifier"]

}
