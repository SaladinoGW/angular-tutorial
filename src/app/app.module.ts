import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatDividerModule } from '@angular/material';
import { ModalContentComponent } from './modal-content.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatDialogModule, MatDividerModule, DragDropModule ],
  declarations: [ AppComponent, HelloComponent, ModalContentComponent ],
  bootstrap:    [ AppComponent, ModalContentComponent ]
})
export class AppModule { }
