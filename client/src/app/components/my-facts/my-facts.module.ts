import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFactsComponent } from './my-facts/my-facts.component';
import { MyFactsRoutingModule } from './my-facts-routing.module';
import { CarouselModule } from 'src/app/shared/carousel.module';


@NgModule({
  declarations: [
    MyFactsComponent,
  ],
  imports: [
    CommonModule,
    MyFactsRoutingModule,
    CarouselModule
  ]
})
export class MyFactsModule { }
