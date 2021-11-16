import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFactsComponent } from './all-facts/all-facts.component';
import { AllFactsRoutingModule } from './all-facts-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { UserMsgModule } from 'src/app/shared/user-msg/user-msg.module';

@NgModule({
  declarations: [
    AllFactsComponent,
  ],
  imports: [
    CommonModule,
    AllFactsRoutingModule,
    CarouselModule,
    UserMsgModule,
  ]
})
export class AllFactsModule { }
