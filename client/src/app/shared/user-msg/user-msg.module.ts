import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserMsgComponent } from './user-msg.component';



@NgModule({
  declarations: [UserMsgComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserMsgComponent
  ]
})
export class UserMsgModule { }
