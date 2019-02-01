import { Component, OnInit } from '@angular/core';
import { Box } from '../box';
import { BoxService } from '../box.service';
import { VegStockService } from '../veg-stock.service';
import { VegStock } from '../veg-stock';
import { and } from '@angular/router/src/utils/collection';
import { start } from 'repl';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  boxes:Box[]
  vegStock:VegStock[]

  constructor(private boxService:BoxService,
    private vegService:VegStockService) { 
    this.boxes=[]
  }

  deleteBox(index:number, vegTypes:string){
    this.boxService.deleteBox(index).subscribe(
      res => {
        this.boxService.getBoxes().subscribe(
          res => {this.boxes = res}
        )
      }
    )

    this.addStockOnBoxRemove(vegTypes)
  }

  addStockOnBoxRemove(vegTypes:string){
    var Veg = vegTypes.split(',')
    Veg.pop()
    var ids = []
    var indices = []
    for (let v of Veg){
      var i = 0
      var filled = false
      while (filled == false){
        var vs = this.vegStock[i]
        if (v === vs.name){
          ids.push(vs.id)
          indices.push(i)
          filled = true
        } else {
          i++
        }
      }
    }
    console.log(ids)
    for (let i in ids){
      var id = ids[i]
      var index = indices[i]
      var qty = this.vegStock[index].portionSize
      this.vegService.addStock(id, qty).subscribe(
        res => {
          this.vegService.getVeg().subscribe()
        }
      )
    }
  }

  ngOnInit() {
    this.boxService.getBoxes().subscribe(
      res => {this.boxes = res}
    )
    this.vegService.getVeg().subscribe(
      res => {this.vegStock = res}
    )
  }

}
