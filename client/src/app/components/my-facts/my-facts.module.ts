import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFactsComponent } from './my-facts/my-facts.component';
import { MyFactsRoutingModule } from './my-facts-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { UserMsgModule } from 'src/app/shared/user-msg/user-msg.module';


@NgModule({
  declarations: [
    MyFactsComponent,
  ],
  imports: [
    CommonModule,
    MyFactsRoutingModule,
    CarouselModule,
    UserMsgModule
  ]
})
export class MyFactsModule { }
