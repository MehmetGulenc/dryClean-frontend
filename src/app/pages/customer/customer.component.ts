import { CustomerService } from "./../../services/customer.service";
import { Component, OnInit } from "@angular/core";
import { Customer } from "src/app/models/customer";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
  styleUrls: ["./customer.component.scss"],
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  constructor(
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }
  getCustomer() {
    this.customerService.getCustomer().subscribe(
      (response) => {
        this.customers = response.data;
        this.toastrService.success(response.message, "Başarılı");
      },
      (responseError) => {
        this.router.navigate(["dashboard"]);
        this.toastrService.error(
          responseError.error.message,
          "Yetkiniz Bulunmamaktadır!"
        );
      }
    );
  }
}
