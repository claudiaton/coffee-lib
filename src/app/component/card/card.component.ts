import { Component, Inject, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SplitPipe } from 'src/app/pipes/split.pipe';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  coffee: any = {};
  @Input()
  coffeeNotes: Array<string> = [];
  // title = this.coffee.blend_name;
  // subtitle = this.coffee.variety;
  details = [this.coffee.origin, this.coffee.intensifier]
  // this.coffee.notes && notesArray = this.coffee.notes.split(", ")

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DetailsDialog, {
      width: '400px',
      data: {
        name: this.coffee.blend_name,
        variety: this.coffee.variety,
        notes: this.coffee.notes,
        origin: this.coffee.origin,
        intensifier: this.coffee.intensifier,
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
