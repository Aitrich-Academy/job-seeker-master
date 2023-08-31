import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit{
  user: any;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    const user: any = sessionStorage.getItem('user') as string;
    // console.log(JSON.parse(user));
    this.authService.getUserById(JSON.parse(user).id).subscribe((data: any[]) => {
      console.log(data);
      
      this.user = data;
    })
  }
}
