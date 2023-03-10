import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
   btn = document.querySelector("#checkbox");
   nav = document.querySelector(".nav-menu");

  constructor() {

  }
  open(){

  };
  ngOnInit(): void {
  }

}
