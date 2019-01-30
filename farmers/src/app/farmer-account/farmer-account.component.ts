import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { Farmer } from '../farmer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-farmer-account',
  templateUrl: './farmer-account.component.html',
  styleUrls: ['./farmer-account.component.css']
})
export class FarmerAccountComponent implements OnInit {
  farmer:Farmer
  editName:boolean
  editAddress:boolean
  editAccNo:boolean
  editSortCode:boolean

  farmerDetailsSubscription:Subscription

  constructor(private farmsvc:FarmerService) {
    this.farmer={name:"",address:"",accountNumber:0,sortCode:0,email:"",password:""}
  }

  editNameToggle() {
    this.editName=!this.editName
  }

  editAddressToggle() {
    this.editAddress=!this.editAddress
  }

  editAccNoToggle() {
    this.editAccNo=!this.editAccNo
  }

  editSortCodeToggle() {
    this.editSortCode=!this.editSortCode
  }

  ngOnInit() {
    this.farmerDetailsSubscription=this.farmsvc.farmerDetails.subscribe(farmer => { this.farmer = farmer; });
  }

}
