import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  coffee: any = {};

  title = this.coffee.blend_name;
  subtitle = "Coffee Variety";
  content = "Coffee notes";
  details = ["Coffee Origin", "Coffee intensifier"]


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DetailsDialog);
  }
}

@Component({
  selector: 'app-details',
  templateUrl: '../details/details.component.html',
  styleUrls: ['../details/details.component.scss']
})
export class DetailsDialog { }
