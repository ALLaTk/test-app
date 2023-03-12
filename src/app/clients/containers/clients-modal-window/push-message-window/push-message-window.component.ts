import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PushMessageModalWindow } from 'src/app/clients/models/push-message';

@Component({
  selector: 'app-push-message-window',
  templateUrl: './push-message-window.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./push-message-window.component.scss']
})
export class PushMessageWindowComponent {
  constructor(
    public dialogRef: MatDialogRef<PushMessageWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PushMessageModalWindow,
  ) {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
