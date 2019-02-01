import { Component, OnInit } from '@angular/core';
import { Box } from '../box';
import { BoxService } from '../box.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  boxes:Box[]

  constructor(private boxService:BoxService) { 
    this.boxes=[]
  }

  deleteBox(index:number){
    this.boxService.deleteBox(index).subscribe(
      res => {
        this.boxService.getBoxes().subscribe(
          res => {this.boxes = res}
        )
      }
    )
  }

  ngOnInit() {
    this.boxService.getBoxes().subscribe(
      res => {this.boxes = res
      console.log(this.boxes)}
    )
  }

}
