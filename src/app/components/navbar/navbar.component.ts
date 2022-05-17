import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {SubscribeService} from "../../services/subscribe.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger("openClose", [
      state(
        "open",
        style({
          transform: "scale(1, 1)"
        })
      ),
      state(
        "closed",
        style({
          transform: "scale(0.95, 0.95)"
        })
      ),
      transition("open => closed", [animate("100ms ease-in")]),
      transition("closed => open", [animate("200ms ease-out")])
    ])
  ]
})
export class NavbarComponent implements OnInit {

  isMenuBtnClicked:boolean = false;
  showWelcomeText: boolean = false;

  constructor(private _router:Router, public authService:AuthenticationService, public subService:SubscribeService) { }

  public ngOnInit(): void {
  }

  menuClicked(): void{
    this.isMenuBtnClicked = !this.isMenuBtnClicked;
  }
  get openCloseTrigger() {
    return this.isMenuBtnClicked ? "open" : "closed";
  }

  scroll(id:string){
    let el = document.getElementById(id);
    if(el != null){
      el.scrollIntoView();
    }
  }

}
