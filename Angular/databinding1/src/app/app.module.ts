import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GameControllerComponent } from './game-controller/game-controller.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { UploadListComponent } from './uploads/upload-list/upload-list.component';
import { UploadFormComponent } from './uploads/upload-form/upload-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControllerComponent,
    OddComponent,
    EvenComponent,
    UploadListComponent,
    UploadFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
