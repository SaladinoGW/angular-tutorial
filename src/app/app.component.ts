import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { ModalContentComponent } from './modal-content.component';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(ModalContentComponent, {
      width: '200px',
      height: '300px',

    })
  }
}
