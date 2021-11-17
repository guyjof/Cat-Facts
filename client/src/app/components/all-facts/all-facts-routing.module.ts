import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AllFactsComponent } from './all-facts.component';

const routes: Routes = [
  { path: '', component: AllFactsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllFactsRoutingModule { }
