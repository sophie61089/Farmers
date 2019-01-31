import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VegStock } from './veg-stock';

@Injectable({
  providedIn: 'root'
})
export class VegStockService {

  rootURL:String
  constructor(private httpservice:HttpClient) {
    this.rootURL="http://localhost:9901/vegstock"
   }

   getVeg():Observable<VegStock[]>{
     return this.httpservice.get<VegStock[]>(this.rootURL+"/list")
   }

   addVeg(newVeg:VegStock):Observable<any>{
     const httpOpts = {
       headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
       )
     }

     var reqBody = "name="+newVeg.name+
     "&amount="+newVeg.amount+
     "&price="+newVeg.price+
     "&portionSize="+newVeg.portionSize

     console.log(reqBody)
     return this.httpservice.post<VegStock>(
       this.rootURL+"/register", reqBody, httpOpts
     )
   }

   addStock(vegId:number, qtyAdded:number):Observable<any>{
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
      )
    }

    var reqBody = "id="+vegId+"&added="+qtyAdded

    return this.httpservice.post<VegStock>(
      this.rootURL+"/addstock", reqBody, httpOpts
    )
   }

   removeStock(vegId:number, qtyremoved:number):Observable<any>{
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
      )
    }

    var reqBody = "id="+vegId+"&used="+qtyremoved

    return this.httpservice.post<VegStock>(
      this.rootURL+"/addstock", reqBody, httpOpts
    )
   }

}