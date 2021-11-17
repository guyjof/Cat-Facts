import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isScreenOpen: boolean = false

  constructor() { }

  toggleScreen() {
    this.isScreenOpen = !this.isScreenOpen
  }
}
