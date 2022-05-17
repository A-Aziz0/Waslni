import { Injectable } from '@angular/core';
import {MessageServiceService} from "./message-service.service";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  signed:boolean = false;

  constructor(private msgService:MessageServiceService) {
    localStorage.getItem("username")?this.signed = true: this.signed = false;
  }

  get isSignedIn(){
    return this.signed;
  }

  signUserDataToLocal(username:string, password:string){
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    this.msgService.showMassage("Signed in successfully", "bg-teal-500").then();
    this.signed = true;
    console.log("user is signed:" + this.signed)

  }
  removeUserDataFromLocal(){
    localStorage.clear()
    this.msgService.showMassage("Signed out successfully", "bg-red-500").then();
    this.signed = false;
    window.location.reload();
  }
  getUsername(){
    let username = localStorage.getItem("username")
    return username||"";
  }
}

