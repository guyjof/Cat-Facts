import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AllFactsComponent } from './all-facts.component';
import { AllFactsRoutingModule } from './all-facts-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  declarations: [
    AllFactsComponent,
  ],
  imports: [
    CommonModule,
    AllFactsRoutingModule,
    CarouselModule,
    LoaderModule
  ]
})
export class AllFactsModule { }
