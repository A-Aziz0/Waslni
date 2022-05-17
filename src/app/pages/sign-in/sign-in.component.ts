import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  username:string = "";
  password:string = "";
  constructor(private titleService:Title, private router:Router, private authService:AuthenticationService) { }


  ngOnInit(): void {
    this.titleService.setTitle("Sign in");
    if(this.authService.isSignedIn){
      this.router.navigate(["index"]).then();
    }
  }

  signIn(){
    this.authService.signUserDataToLocal(this.username, this.password);
    this.router.navigate(["index"]);
  }

}
