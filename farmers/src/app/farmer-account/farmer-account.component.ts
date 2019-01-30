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

  constructor(private farmsvc:FarmerService) {
    
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
    this.farmer = {name:localStorage.getItem("name"), address:localStorage.getItem("name"),
     accountNumber:Number.parseInt(localStorage.getItem("accountNumber")),
      sortCode:Number.parseInt(localStorage.getItem("sortCode")), email:null, password:null}
  }

}
