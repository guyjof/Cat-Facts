import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'user-msg',
  templateUrl: './user-msg.component.html',
  styleUrls: ['./user-msg.component.scss']
})
export class UserMsgComponent implements OnInit {

  @Input() msg: string = ''

  constructor() { }

  ngOnInit(): void {

  }

}
