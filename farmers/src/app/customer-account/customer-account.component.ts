import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.css']
})
export class CustomerAccountComponent implements OnInit {

  customers:Customer[]

  customer:Customer

  editName:boolean
  editAddress:boolean
  editEmail:boolean
  editPassword:boolean
  editCardType:boolean
  editCardNo:boolean
  editExpiry:boolean

  constructor(private customerService:CustomersService) { 
    this.customers=[]
  }

  editNameToggle() {
    this.editName=!this.editName
  }

  editAddressToggle() {
    this.editAddress=!this.editAddress
  }

  editEmailToggle() {
    this.editEmail=!this.editEmail
  }

  editPasswordToggle() {
    this.editPassword=!this.editPassword
  }

  editCardTypeToggle() {
    this.editCardType=!this.editCardType
  }

  editCardNoToggle() {
    this.editCardNo=!this.editCardNo
  }

  editExpiryToggle() {
    this.editExpiry=!this.editExpiry
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
    this.customer = JSON.parse(localStorage.getItem("customer"))
  }

}
