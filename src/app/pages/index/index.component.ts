import { Component, OnInit } from '@angular/core';
import {faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  animations:[]
})
export class IndexComponent implements OnInit {

  circleCheck = faCircleCheck;
  circleX = faCircleXmark
  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle("Waslni")
  }

}
