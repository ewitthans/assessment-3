import { Component, Input, OnInit, ViewEncapsulation } from "@angular/core";
import { APIService } from "./api.service";
import { Stock } from "./stock";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  @Input()
  public stockData: Stock;
  public search = "";

  addStock(search: string) {
    this.search = search;
    console.log(search);
    this.svc.getStocks().subscribe(data => {
      this.stockData = data;
      //console.log(this.stockData);
      //console.log(this.stockData.companyName)
    });
  }

  constructor(private svc: APIService) {}

  ngOnInit() {}
}
