import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-customer-home',
  templateUrl: './customer-home.component.html',
  styleUrls: ['./customer-home.component.css']
})
export class CustomerHomeComponent implements OnInit {

  public customers;
  constructor(private authService: AuthService,private router : Router,private location: Location) { }

  ngOnInit() {
    this.authService
    .displayCustomers()
       .subscribe((res)=>{ 
        this.customers = res.json();   
      console.log('response is ',this.customers);

  },(error) => {
      console.log('error is ', error)
  })
  }
  Removecus(_id,email){
    console.log(_id);
    this.authService.Removecus(_id,email)
    .subscribe(res=>{
      console.log(res);
      window.location.reload();

    })

  }
  resowners(){
    this.router.navigate(['resowner']);
  }

}
