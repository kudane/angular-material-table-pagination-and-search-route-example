import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeriodicComponent } from './periodic.component';

const routes: Routes = [
  {
    path: 'periodic',
    component: PeriodicComponent
    // resolve: {
    //   article: PeriodicResolver
    // }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeriodicRoutingModule {}
