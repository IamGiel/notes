import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-game-controller",
  templateUrl: "./game-controller.component.html",
  styleUrls: ["./game-controller.component.css"]
})
export class GameControllerComponent implements OnInit {
  startGame;
  @Output()
  intervalFired = new EventEmitter<number>();
  lastNumber = 0;

  constructor() {}

  ngOnInit() {}

  start() {
    this.startGame = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  stop() {
    clearInterval(this.startGame);
  }
}
