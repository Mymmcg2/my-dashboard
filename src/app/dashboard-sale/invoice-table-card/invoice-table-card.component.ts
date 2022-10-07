import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-table-card',
  templateUrl: './invoice-table-card.component.html',
  styleUrls: ['./invoice-table-card.component.css']
})
export class InvoiceTableCardComponent implements OnInit {

  listOfData: Array<{ customer: string; product: string; invoice: string; price: string; status: string }> = [];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 6; i++) {
      this.listOfData.push({
        customer: `Customer`,
        product: 'Sunglass',
        invoice: `#DE2548`,
        price: '$350',
        status: 'active'
      });
    }
  }

}
