import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyFactsComponent } from './my-facts.component';
import { MyFactsRoutingModule } from './my-facts-routing.module';
import { CarouselModule } from 'src/app/shared/carousel/carousel.module';
import { LoaderModule } from 'src/app/shared/loader/loader.module';

@NgModule({
  declarations: [
    MyFactsComponent,
  ],
  imports: [
    CommonModule,
    MyFactsRoutingModule,
    CarouselModule,
    LoaderModule
  ]
})
export class MyFactsModule { }
