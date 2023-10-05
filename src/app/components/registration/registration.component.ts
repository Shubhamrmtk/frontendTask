import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  loginForm = new FormGroup({
    name:new FormControl(''),
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private auth: AuthService, private router:Router ) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      this.router.navigate(['userdetails']);
    }
  }
  onSubmit(): void {
    if (this.loginForm.valid) {
      this.auth.registerUser(this.loginForm.value).subscribe(
        (result) => {
          let res:any=result
          this.auth.setToken(res.token)
          console.log(result);
          this.router.navigate(['/userdetails']);
        },
        (err: Error) => {
          alert('User Not Exist Or Invalis Credentical');
          this.router.navigate(['/registration']);
        }
      );
    }
  }
}
