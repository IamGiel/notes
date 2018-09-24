import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  evenNUmber: number[] = [];
  oddNUmber: number[] = [];
  onIntervalFired(firedNUmber: number) {
    if (firedNUmber % 2 === 0) {
      this.evenNUmber.push(firedNUmber);
    } else {
      this.oddNUmber.push(firedNUmber);
    }
    console.log(firedNUmber);
  }
}
