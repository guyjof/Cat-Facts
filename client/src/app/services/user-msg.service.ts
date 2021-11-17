import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Msg } from "src/app/types";


@Injectable({
  providedIn: 'root'
})
export class UserMsgService {

  private userMsg: any = new BehaviorSubject<Msg | null>(null)
  currentMessage: any = this.userMsg.asObservable()

  updateUserMsg(msg: Msg) {
    this.userMsg.next(msg)
    setTimeout(() => {
      this.userMsg.next(null)
    }, 3500)
  }

}
