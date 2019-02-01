import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { VegStock } from '../veg-stock';
import { VegStockService } from '../veg-stock.service';
import { BoxService } from '../box.service';
import { Box } from '../box';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers:Customer[]
  veg:VegStock[]

  constructor(private customerService:CustomerService,
    private vegService:VegStockService,
    private boxService:BoxService) {
    this.customers=[]
   }

  generateBoxes(){
    for (let c of this.customers){
      var items = []
      var i = 0
      var newBox:Box
      while (items.length != c.subscriptionType){
        var v = this.veg[i]
        if (v.amount >= v.portionSize){
          items.push(v.name)
          console.log(v.id,v.portionSize)
          this.vegService.removeStock(v.id,v.portionSize).subscribe(
            res => {
              this.vegService.getVeg().subscribe()
            }
          )
          i++
        } else {
          i++
        }
      } 

      var vegTypes = ""
      for (let i of items){
        vegTypes = vegTypes+i+","
      }

      console.log(vegTypes)

      this.boxService.addBox({id:0, vegTypes:vegTypes}).subscribe(
        res => {newBox = res
        this.boxService.addBoxToCustomer(newBox.id, c.customerId).subscribe()}
      )
    }
  }

  deleteCustomer(index:number){
    this.customerService.deleteCustomer(index).subscribe(
      res => {
        this.customerService.getCustomers().subscribe(
          res => {this.customers = res}
        )
      }
    )
  }

  ngOnInit() {
    this.customerService.getCustomers().subscribe(
      res => {this.customers = res}
    )
    this.vegService.getVeg().subscribe(
      res => {this.veg = res}
    )
  }

}
