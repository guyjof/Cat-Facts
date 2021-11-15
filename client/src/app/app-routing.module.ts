import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'facts',
    loadChildren: () => import('./components/all-facts/all-facts.module').then(m => m.AllFactsModule)
  },
  {
    path: 'my',
    loadChildren: () => import('./components/my-facts/my-facts.module').then(m => m.MyFactsModule)
  },
  { path: '', component: HomePageComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
