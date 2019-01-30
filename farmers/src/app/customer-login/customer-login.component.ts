import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {

  customers:Customer[]

  constructor(private customerService:CustomersService) { 
    this.customers=[]
  }

  addNewCustomer(newCustomer:Customer){
    this.customerService.addNewCustomer(newCustomer).subscribe(
      res=>{ this.customerService.getCustomers().subscribe(
        res=>{ this.customers= res}
      )}
    )
  }

  deleteCustomer(index:number){
    this.customerService.deleteCustomer(index).subscribe(
      res=>{
        this.customerService.getCustomers().subscribe(
          res=>{ this.customers= res}
        )
      }
    )
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      res => {this.customers = res}          )
  }
}