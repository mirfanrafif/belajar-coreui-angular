import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnakkosHomeComponent } from './home/anakkos-home.component';
import { AnakKosRoutingModule } from './anakkos-routing.module';

@NgModule({
  declarations: [AnakkosHomeComponent],
  imports: [
    CommonModule,
    AnakKosRoutingModule
  ]
})
export class AnakKosModule { }
