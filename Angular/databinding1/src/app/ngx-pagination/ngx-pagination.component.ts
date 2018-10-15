import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngx-pagination",
  templateUrl: "./ngx-pagination.component.html",
  styleUrls: ["./ngx-pagination.component.css"]
})
export class NgxPaginationComponent implements OnInit {
  p: number = 1;
  collection: any[];
  constructor() {}
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
