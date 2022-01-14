import { Observable } from "rxjs";
import { Customer } from "./../models/customer";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ResponseModel } from "../models/responseModel";
import { ListResponseModel } from "../models/listResponseModel";

@Injectable({
  providedIn: "root",
})
export class CustomerService {
  apiUrl = "https://localhost:44365/api/";
  constructor(private httpClient: HttpClient) {}

  getCustomer(): Observable<ListResponseModel<Customer>> {
    let newPath = this.apiUrl + "Customers/getall";
    return this.httpClient.get<ListResponseModel<Customer>>(newPath);
  }
  add(customer: Customer): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(
      this.apiUrl + "Customers/add",
      customer
    );
  }
}
