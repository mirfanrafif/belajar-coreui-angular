import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnakkosHomeComponent } from './home/anakkos-home.component';
import { AnakKosRoutingModule } from './anakkos-routing.module';
import { AnakKosFormComponent } from './form/anak-kos-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AnakkosHomeComponent, AnakKosFormComponent],
  imports: [
    CommonModule,
    AnakKosRoutingModule,
    ReactiveFormsModule
  ]
})
export class AnakKosModule { }
