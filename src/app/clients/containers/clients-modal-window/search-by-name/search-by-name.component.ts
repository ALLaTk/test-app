import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SearchByName } from 'src/app/clients/models/search';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchByNameComponent {
  constructor(
    public dialogRef: MatDialogRef<SearchByNameComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SearchByName,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
