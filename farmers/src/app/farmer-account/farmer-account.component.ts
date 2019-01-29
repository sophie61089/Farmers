import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { Farmer } from '../farmer';

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

  constructor(private farmService:FarmerService) {
    this.farmer={name:"old mcdonald", address:"123 fake st",accountNumber:2344353,sortCode:39487}
    this.editName=false
    this.editAddress=false
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
  }

}
