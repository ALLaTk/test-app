import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchById } from 'src/app/clients/models/search';

@Component({
  selector: 'app-search-by-id',
  templateUrl: './search-by-id.component.html',
  styleUrls: ['./search-by-id.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchByIdComponent {
  constructor(
    public dialogRef: MatDialogRef<SearchByIdComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchById,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
