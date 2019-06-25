import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { APIService } from "./api.service";
import { Stock } from "./stock";
import { DatePipe } from "@angular/common";

declare function colorFunction(): any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @Input()
  public search = "";
  public date: Date;

  public stockData: Stock;

  addStock(search: string) {
    this.search = search;
    // console.log(search);
  }

  constructor(private svc: APIService) {}

  sendValue() {
    this.svc.setUrl(this.search);
  }

  finish() {
    this.svc.getStocks().subscribe(data => {
      this.stockData = data;
      //console.log(this.stockData);
      //console.log(this.stockData.companyName);
    });
  }
  colorFunction() {
    this.date = new Date();
    colorFunction;
  }

  ngOnInit() {}
}
