import { Component, OnInit } from '@angular/core';
import { VegStock } from '../veg-stock';
import { VegStockService } from '../veg-stock.service';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  vegStock:VegStock[]
  isEditable: boolean

  constructor(private vegService:VegStockService) { 
    this.vegStock=[]
  }

  toggleEditFields(){
    this.isEditable = !this.isEditable
  }

  ngOnInit() {
    this.vegService.getVeg().subscribe(
      res => {this.vegStock = res}
    )
  }

}
