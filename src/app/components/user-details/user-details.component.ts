import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  constructor(private authService:AuthService){}
  users:any
  ngOnInit(): void {
    this.authService.fetchUserProfile().subscribe(data=>{
      this.users=data
      console.log(data)
    })
  }
logout(){
  this.authService.logout()
}
}
