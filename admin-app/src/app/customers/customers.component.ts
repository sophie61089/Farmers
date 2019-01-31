import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer[]

  constructor(private customerService:CustomerService) {
    this.customers=[]
   }

  
  deleteCustomer(index:number){
    this.customerService.deleteCustomer(index).subscribe(
      res => {
        this.customerService.getCustomers().subscribe(
          res => {this.customers = res}
        )
      }
    )
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      res => {this.customers = res}
    )
  }

}
