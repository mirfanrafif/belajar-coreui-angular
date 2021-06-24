import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AnakkosHomeComponent } from './home/anakkos-home.component';
import { AnakKosFormComponent } from './form/anak-kos-form.component';

const routes: Routes = [
  {
    path: '',
    component: AnakkosHomeComponent,
    data: {
      title: 'Anak Kos'
    }
  },
  {
    path: 'add',
    component: AnakKosFormComponent,
    data: {
      title: 'Add Anak Kos'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnakKosRoutingModule { }
