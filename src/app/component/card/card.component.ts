import { Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  coffee: any = {};
  
  title = this.coffee.blend_name;
  subtitle = this.coffee.variety;
  // content = this.coffee.notes.slice(",")
  content = "coffee notes"
  details = [this.coffee.origin, this.coffee.intensifier]


  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DetailsDialog, {
      width: '400px',
      data: {
        origin: this.coffee.origin,
        intensifier: this.coffee.intensifier
      }
    });
  }
}

@Component({
  selector: 'app-details',
  templateUrl: '../details/details.component.html',
  // styleUrls: ['../details/details.component.scss']
})
export class DetailsDialog { 
  constructor(
    // public dialogRef: MatDialogRef<DetailsDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
}
