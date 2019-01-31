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

  editName:boolean
  editAddress:boolean
  editEmail:boolean
  editPassword:boolean
  editCardType:boolean
  editCardNo:boolean
  editCvc:boolean
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

  editCVCToggle() {
    this.editCvc=!this.editCvc
  }

  editExpiryToggle() {
    this.editExpiry=!this.editExpiry
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
