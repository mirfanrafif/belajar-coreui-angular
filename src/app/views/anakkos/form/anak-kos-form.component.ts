import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anak-kos-form',
  templateUrl: './anak-kos-form.component.html'
})
export class AnakKosFormComponent implements OnInit {

  private formGroup: FormGroup

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      nama: new FormControl(null, [Validators.required]),
      asal: new FormControl(null, [Validators.required]),
      nohp: new FormControl(null, [Validators.required])
    });
  }

  ngSubmit() {
    if (this.formGroup.valid) {
      const nama = this.formGroup.get('nama').value
      const asal = this.formGroup.get('asal').value
      const nohp = this.formGroup.get('nohp').value

      console.log(`${nama} ${asal} ${nohp}`)
    } else {
      console.log('Isi data yang lengkap')
      this.formGroup.controls['nama'].setErrors({ 'incorrect': true })
    }
  }

}
