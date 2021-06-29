import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnakkosHomeComponent } from './home/anakkos-home.component';
import { AnakKosRoutingModule } from './anakkos-routing.module';
import { AnakKosFormComponent } from './form/anak-kos-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnakKosDetailComponent } from './detail/detail.component';
import { AuthService } from '../../core/services/auth.service';
import { AnakKosService } from '../../core/services/anak-kos.service';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AnakkosHomeComponent, AnakKosFormComponent, AnakKosDetailComponent],
  imports: [
    CommonModule,
    AnakKosRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [AuthService, AnakKosService]
})
export class AnakKosModule { }
