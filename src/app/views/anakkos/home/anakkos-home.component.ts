import { Component, OnInit } from '@angular/core';
import { AnakKos } from '../../../core/entities/AnakKos';
import { AnakKosService } from '../../../core/services/anak-kos.service';

@Component({
  selector: 'app-anakkos-home',
  templateUrl: './anakkos-home.component.html'
})
export class AnakkosHomeComponent implements OnInit {

  anakKos: AnakKos[] = []
  currentPage: number = 1;

  constructor(private anakKosService: AnakKosService) { }

  ngOnInit() {
    this.anakKosService.getAnakKos().subscribe(data => {
      this.anakKos = data;
    })
  }

}
