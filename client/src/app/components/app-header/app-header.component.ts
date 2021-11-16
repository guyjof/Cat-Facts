import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  menuIsOpen: boolean = false

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
  }

  constructor() { }

  ngOnInit(): void {
  }

}
