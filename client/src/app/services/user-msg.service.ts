import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Msg } from "src/app/types";


@Injectable({
  providedIn: 'root'
})
export class UserMsgService {

  public userMsg: Msg | null = null

  updateUserMsg(msg: Msg) {
    this.userMsg = msg
    setTimeout(() => {
      this.userMsg = null
    }, 2500)
  }

}
