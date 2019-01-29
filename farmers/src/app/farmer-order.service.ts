import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FarmerOrder } from './farmer-order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FarmerOrderService {

  rootURL: String
  constructor(private httpservice:HttpClient) {
    this.rootURL="http://localhost:9901/farmerorder"
   }

   getFarmers():Observable<FarmerOrder[]>{
    return this.httpservice.get<FarmerOrder[]>(this.rootURL+"/list")
  }

  addFarmer(newOrder:FarmerOrder):Observable<any>{
    const httpOpts = {
      headers: new HttpHeaders(
       {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
      )
    }

    var reqBody = "vegName="+newOrder.vegName+
    "&quantity="+newOrder.quantity+
    "&unitPrice="+newOrder.unitPrice+
    

    console.log(reqBody)
    return this.httpservice.post<FarmerOrder>(
      this.rootURL+"/register", reqBody, httpOpts
    )
  }

  deleteFarmer(farmerOrderId:number):Observable<FarmerOrder>{
    return this.httpservice.request<FarmerOrder>('DELETE', this.rootURL+"/delete",
    {
     headers: new HttpHeaders({'Content-Type': 'text/plain'}),
     body: farmerOrderId
   })
  }
}
