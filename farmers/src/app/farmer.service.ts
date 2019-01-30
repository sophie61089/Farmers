import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Farmer } from './farmer';
import { FarmerOrder } from './farmer-order';

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  rootURL:String
  constructor(private httpservice:HttpClient) {
    this.rootURL="http://localhost:9901/farmer"
   }

   farmerLogin(username:String, password:String):Observable<Farmer[]>{
     return this.httpservice.get<Farmer[]>(this.rootURL+"/login?username="+username+"&password="+password)
   }

   addFarmer(newFarmer:Farmer):Observable<any>{
     const httpOpts = {
       headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
       )
     }

     var reqBody = "name="+newFarmer.name+
     "&address="+newFarmer.address+
     "&accountNumber="+newFarmer.accountNumber+
     "&sortCode="+newFarmer.sortCode

     console.log(reqBody)
     return this.httpservice.post<Farmer>(
       this.rootURL+"/register", reqBody, httpOpts
     )
   }

   deleteFarmer(farmerId:number):Observable<Farmer>{
     return this.httpservice.request<Farmer>('DELETE', this.rootURL+"/delete",
     {
      headers: new HttpHeaders({'Content-Type': 'text/plain'}),
      body: farmerId
    })
   }

   getOrders(farmerId:number):Observable<FarmerOrder[]>{
     return this.httpservice.get<FarmerOrder[]>(this.rootURL+"/orders?farmerId="+farmerId)
   }

   addOrderToFarmer(farmerId:number, orderId:number):Observable<any>{
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
      )
    }

    var reqBody = "farmerId="+farmerId+"&orderId="+orderId

    return this.httpservice.post<Farmer>(
      this.rootURL+"/register-order-to-farmer", reqBody, httpOpts
    )
   }


}
