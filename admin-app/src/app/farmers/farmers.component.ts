import { Component, OnInit } from '@angular/core';
import { Farmer } from '../farmer';
import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-farmers',
  templateUrl: './farmers.component.html',
  styleUrls: ['./farmers.component.css']
})
export class FarmersComponent implements OnInit {

  farmers:Farmer[]

  constructor(private farmerService:FarmerService) {
    this.farmers=[]
   }

  deleteFarmer(index:number){
    this.farmerService.deleteFarmer(index).subscribe(
      res => {
        this.farmerService.getFarmer().subscribe(
          res => {this.farmers = res}
        )
      }
    )
  }

  ngOnInit() {
    this.farmerService.getFarmer().subscribe(
      res => {this.farmers = res}
    )
  }

}
