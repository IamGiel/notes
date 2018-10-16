import { Component, OnInit } from "@angular/core";
import { NgbPaginationConfig } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-ngx-pagination",
  templateUrl: "./ngx-pagination.component.html",
  styleUrls: ["./ngx-pagination.component.css"]
})
export class NgxPaginationComponent implements OnInit {
  p: number = 1;
  collection: any[];
  page = 4;
  pageSize = 3;

  constructor(config: NgbPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = "sm";
    config.boundaryLinks = true;
  }
  ngOnInit() {
    let data = [
      {
        name: "Anil",
        "anil.singh581@gmail.com": "ssd",
        age: "34",
        city: "Noida, UP, India"
      },
      {
        name: "Anil",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Sunil",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Alok",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Tinku",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "XYZ",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "asas",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "erer",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "jhjh",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Anil",
        "anil.singh581@gmail.com": "ssd",
        age: "34",
        city: "Noida, UP, India"
      },
      {
        name: "Anil",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Sunil",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Alok",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "Tinku",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "XYZ",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "asas",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "erer",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      },
      {
        name: "jhjh",
        email: "anil.singh581@gmail.com",
        age: "34",
        city: "Noida"
      }
    ];

    this.collection = data;
  }
}
