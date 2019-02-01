import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { Farmer } from '../farmer';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  farmers:Farmer[]

  farmer:Farmer


  constructor(private farmerService:FarmerService) {
    this.farmers=[]
    this.farmer={farmerId:0,name:"",address:"",accountNumber:0,sortCode:0,email:"",password:""}
  }

  farmerLogin(username:string, password:string){
    this.farmerService.farmerLogin(username,password).subscribe(
      res=>{ this.farmer=res}
    )
    
    localStorage.setItem("farmer", JSON.stringify(this.farmer))
   
  }

  addNewFarmer(newFarmer:Farmer){
    this.farmerService.addNewFarmer(newFarmer).subscribe(
      res=>{ this.farmer=res}
    )
    
    localStorage.setItem("farmer", JSON.stringify(this.farmer))
  }

  deleteFarmer(index:number){
    this.farmerService.deleteFarmer(index)
  }

  ngOnInit() {
  }
}