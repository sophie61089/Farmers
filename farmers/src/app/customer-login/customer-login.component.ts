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

  customer:Customer

  showSubcribeMessage:boolean

  constructor(private customerService:CustomersService) { 
    this.customers=[]
    this.customer={customerId:0,name:"",email:"",address:"",cardNumber:"",cardType:"",password:"",cvc:0,expiryDate:""}
  }

  customerLogin(uname:string,pword:string) {
    this.customerService.customerLogin(uname,pword).subscribe(
      res=> {this.customer = res}
    )

    localStorage.setItem("customer",JSON.stringify(this.customer))
  }

  addNewCustomer(newCustomer:Customer){
    console.log(JSON.stringify(newCustomer))
    this.customerService.addNewCustomer(newCustomer).subscribe(
      res=>{ this.customer = res }
    )

    localStorage.setItem("customer",JSON.stringify(this.customer))

    this.showSubcribeMessage=!this.showSubcribeMessage
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