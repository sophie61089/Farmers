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


  constructor(private farmsvc: FarmerService) { }

  ngOnInit() {
  }

  farmerLogin(username:string, password:string){
    this.farmsvc.farmerLogin(username,password).subscribe(
      res=>{
        // pull the data from service
          res=>{ this.farmer=res }
      }
    )
  }

}
