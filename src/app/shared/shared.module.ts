import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [MaterialModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class SharedModule {}
