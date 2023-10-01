import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
interface User
{
    userid: string;
    email: string;
    password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public user: User = {
        userid: '',
        email: '',
        password: ''
    };

  constructor(private router : Router)
  {

  }
  public onSubmit() 
  {
    console.log('Current user ', this.user);
    if(this.user.userid === this.user.password)
      this.router.navigate(['homepage']);
    else
      this.router.navigate(['unauthorized']);
  }


}
