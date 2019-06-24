import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Stock } from "./stock";

@Injectable({
  providedIn: "root"
})
export class APIService {
  private url: string;

  public setUrl(value: string) {
    this.url =
      "https://sandbox.iexapis.com/stable/stock/" +
      value +
      "/quote?token=Tpk_9ef4a4e9b01d41aaab56e08a429923f8";

    console.log(this.url);
  }
  constructor(private http: HttpClient) {}

  public getStocks(): Observable<Stock> {
    return this.http.get<Stock>(this.url);
  }
}
