import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  SignUpAsCustomer : boolean;
  SignUpAsResAdmin : boolean;

  constructor( private authService: AuthService, private router: Router ){}

Customerform = new FormGroup({
  firstName: new FormControl('',[
    Validators.required
  ]),
  lastName: new FormControl('',[
    Validators.required
  ]),
  email: new FormControl('',[
    Validators.required,
    Validators.email
  ]),
  password: new FormControl('',[
    Validators.required
  ]),
  repassword: new FormControl('',[
    Validators.required,

  ]),

  address: new FormControl('',[
    Validators.required,

  ]),
  restaurantName: new FormControl('',[
    Validators.required,

  ])

})


signUp(values){
console.log(values)
}

signUpCustomer(){
  this.SignUpAsCustomer = true;
  this.SignUpAsResAdmin = false; 
}

signUpRestOwner(){
  this.SignUpAsCustomer = false;
  this.SignUpAsResAdmin = true; 
}

signUpASCustomer(data){
 this.authService.signUpCustomer(data)
 .subscribe(res=>console.log(res));
 this.router.navigate(['/login']);
}

signUpAsRestOwner(data){
  this.authService.signUpRestOwner(data)
  .subscribe(res => console.log(res))
}

}
