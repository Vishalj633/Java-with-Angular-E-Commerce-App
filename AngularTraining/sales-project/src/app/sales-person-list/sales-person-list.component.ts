import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // Create an array of Objects
  salesPersonList : SalesPerson [] = [
    new SalesPerson("Vishal", "Jagadale", "vishal@gmail.com", 52000),
    new SalesPerson("Niti", "Ayog", "niti@gmail.com", 96000),
    new SalesPerson("Pradhan", "Mantri", "pradhan@gmail.com", 89000),
    new SalesPerson("dream", "girl", "dream@gmail.com", 25000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
