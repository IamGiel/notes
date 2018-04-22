// An NgModule describes how the application parts fit together.
// Every application has at least one Angular module,
// the root module that you bootstrap to launch the application.
// By convention, it is usually called AppModule.

// https://angular.io/guide/bootstrappinghttps:

/* JavaScript imports */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

/* the AppModule class with the @NgModule decorator */

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

//*********************** */
//*********************** */

// -- @Component decorator --
// Component decorator allows you to mark a class as an Angular component 
// and provide additional metadata that determines how the component should be processed,
// instantiated and used at runtime.

@Component({ selector: "greet", template: "Hello {{name}}!" })
class Greet {
  name: string = "World";
}

//
