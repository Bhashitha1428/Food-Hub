import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-resowners',
  templateUrl: './resowners.component.html',
  styleUrls: ['./resowners.component.css']
})
export class ResownersComponent implements OnInit {

  public restaurentowners;
  constructor(private authService: AuthService,private router : Router) { }

  ngOnInit() {
    this.authService
    .displayResturentowners()
       .subscribe((res)=>{ 
        this.restaurentowners = res.json();   
      console.log('response is ',this.restaurentowners);

  },(error) => {
      console.log('error is ', error)
  })
  }
  removeOwner(_id,email){
    console.log(_id);
    this.authService.removeOwner(_id,email)
    .subscribe(res=>{
      console.log(res);
      window.location.reload();

    })

  }
  customers(){
    this.router.navigate(['customerhome']);
  }

}
