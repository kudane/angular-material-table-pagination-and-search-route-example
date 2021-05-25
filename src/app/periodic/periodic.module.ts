import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { PeriodicRoutingModule } from './periodic-routing.module';
import { PeriodicComponent } from './periodic.component';

@NgModule({
  imports: [SharedModule, PeriodicRoutingModule],
  declarations: [PeriodicComponent],
  providers: []
})
export class PeriodicModule {}
