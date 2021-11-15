import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFactsComponent } from './all-facts/all-facts.component';
import { AllFactsRoutingModule } from './all-facts-routing.module';
import { CarouselModule } from 'src/app/shared/carousel.module';


@NgModule({
  declarations: [
    AllFactsComponent,
  ],
  imports: [
    CommonModule,
    AllFactsRoutingModule,
    CarouselModule
  ]
})
export class AllFactsModule { }
