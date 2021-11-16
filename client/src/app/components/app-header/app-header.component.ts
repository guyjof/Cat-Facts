import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {
  @Input() close: boolean = true
  menuIsOpen: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.menuIsOpen = this.close
  }

  toggleMenu() {
    this.menuIsOpen = !this.menuIsOpen
  }

}
