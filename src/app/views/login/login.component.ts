import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  private formGroup: FormGroup

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  login() {
    if (this.formGroup.valid) {
      const username = this.formGroup.get('username').value
      const password = this.formGroup.get('password').value
      this.authService.login(username, password).subscribe({
        next: data => {
          this.router.navigate([''])
        },
        error: error => {
          console.log(error)
        }
      })
    } else {
      console.log(this.formGroup.errors)
    }

  }

  validations(formControlName: string) {
    return this.formGroup.controls[formControlName].errors && this.formGroup.controls[formControlName].touched
  }
}
