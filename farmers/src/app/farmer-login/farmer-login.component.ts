import { Component, OnInit } from '@angular/core';
import { FarmerService } from '../farmer.service';
import { Farmer } from '../farmer';

@Component({
  selector: 'app-farmer-login',
  templateUrl: './farmer-login.component.html',
  styleUrls: ['./farmer-login.component.css']
})
export class FarmerLoginComponent implements OnInit {

  loginBool:boolean
  farmer:Farmer


  constructor(private farmsvc: FarmerService) {
   }

   

  farmerLogin(username:string, password:string){
    this.farmsvc.farmerLogin(username,password).subscribe(
      res=>{ this.farmer=res
      }
    )
    
    localStorage.setItem("farmer", JSON.stringify(this.farmer))
   
  }

  ngOnInit() {
  }

}
