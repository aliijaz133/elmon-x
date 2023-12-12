import { Component, Inject, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss'],
})
export class EditDialogComponent {
  editedPrice: number;
  priceUpdated = new EventEmitter<number>();

  constructor(
    public dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public price: number
  ) {
    this.editedPrice = price; // Initialize editedPrice with the current price
  }

  onSaveClick(): void {
    this.priceUpdated.emit(this.editedPrice); // Emit the updated price
    this.dialogRef.close();
  }
}
