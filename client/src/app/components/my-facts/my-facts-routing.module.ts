import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyFactsComponent } from './my-facts.component';

const routes: Routes = [
  { path: '', component: MyFactsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyFactsRoutingModule { }
