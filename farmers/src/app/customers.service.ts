import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  rootURL:string
  constructor(private httpsvc:HttpClient) { 
    this.rootURL="http://localhost:9901/customers"
  }

  getCustomers():Observable<Customer[]>{
    return this.httpsvc.get<Customer[]>(this.rootURL+"/list")
    }

    addNewCustomer(newCustomer:Customer):Observable<Customer>{
      const http0pts ={
          headers: new HttpHeaders(
            {'Content-Type':
              'application/x-www-form-urlencoded;charset=UTF-8'})
      }
      var reqBody="password="+newCustomer.password+"address="+newCustomer.address+"&cardNumber="
      +newCustomer.cardNumber+"&cardType="+newCustomer.cardType+"&cvc="+newCustomer.cvc+"&expiryDate="+newCustomer.expiryDate+"&name="+newCustomer.name+"&email="+newCustomer.email

      return this.httpsvc.post<Customer>(this.rootURL+"/register",reqBody,http0pts)
}

deleteCustomer(customerId:number):Observable<Customer>{ 
  return this.httpsvc.request<Customer>('DELETE',this.rootURL+"/delete",
    {
      headers: new HttpHeaders({'Content-Type': 'text/plain'}),
      body: customerId
    })
}
}
  