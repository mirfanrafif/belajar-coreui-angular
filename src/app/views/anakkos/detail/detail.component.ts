import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnakKos } from '../../../core/entities/AnakKos';
import { AnakKosService } from '../../../core/services/anak-kos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
})
export class AnakKosDetailComponent implements OnInit {

  anakKos: AnakKos

  constructor(private service: AnakKosService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    this.findAnakKos(id)
  }
  findAnakKos(id: string) {
    this.service.findAnakKos(id).subscribe({
      next: data => {
        this.anakKos = data
      }

    })
  }

}
