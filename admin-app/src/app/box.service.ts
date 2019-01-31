import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Box } from './box';

@Injectable({
  providedIn: 'root'
})
export class BoxService {

  rootURL:String


  constructor(private httpservice:HttpClient) {
    this.rootURL="http://localhost:9901/box"
   }
 
  

  getBoxes():Observable<Box[]>{
    return this.httpservice.get<Box[]>(this.rootURL+"/list")
  }

  addBox(newBox:Box):Observable<any>{
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
      )
    }

     var reqBody = "name="+newBox.vegTypes

     return this.httpservice.post<Box>(
       this.rootURL+"/register", reqBody, httpOpts
     )
  }

   deleteBox(boxId:number):Observable<Box>{
     return this.httpservice.request<Box>('DELETE', this.rootURL+"/delete",
     {
      headers: new HttpHeaders({'Content-Type': 'text/plain'}),
      body: boxId
    })
   }

   addBoxToCustomer(boxId:number, customerId:number):Observable<any>{
    const httpOpts = {
      headers: new HttpHeaders(
        {'Content-Type' : 'application/x-www-form-urlencoded;charset=UTF-8'}
      )
    }

    var reqBody = "boxId="+boxId+"&customerId="+customerId

    return this.httpservice.post<Box>(
      this.rootURL+"/register-box-to-customer", reqBody, httpOpts
    )
   }


}