import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import  { Contact } from '../log-in/contatct';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: Http) { }
  private headers = new Headers({'content-Type':'application/json'});
  private option = new RequestOptions({headers:this.headers});
 /*createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'Basic ' +
      btoa('Email:password'));
  }*/

  login(contact){
  let headers = new Headers();
    //this.createAuthorizationHeader(headers);
    return this.http.post('http://localhost:3000/api/login/',contact,{
      headers:this.headers
    });
  }

  signUpCustomer(data){
    console.log(data)
    return this.http.post('http://localhost:3000/api/admins/',data,{
      headers:this.headers
    })
  }

  signUpRestOwner(data){
    console.log(data)
    return this.http.post('http://localhost:3000/user/registerrestaurant',data,{
      headers:this.headers
    })
  }

  displayCustomers(){
    return this.http.get(`http://localhost:3000/api/customers`);
  }

  displayResturentowners(){
    return this.http.get(`http://localhost:3000/api/restaurentowners`);
    
  }
  Removecus(_id,email){
    return this.http.delete('http://localhost:3000/api/customers/'+_id+"/"+email)
  }

  removeOwner(_id,email){
    return this.http.delete('http://localhost:3000/api/restaurentowners/'+_id+'/'+email)
}
}
