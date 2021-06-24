import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnakkosHomeComponent } from './home/anakkos-home.component';

const routes: Routes = [
  {
    path: '',
    component: AnakkosHomeComponent,
    data: {
      title: 'Anak Kos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnakKosRoutingModule { }
