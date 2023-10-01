import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  @ViewChild(NgForm, { static: true })
    public registrationForm: NgForm;

    public showPassword: boolean = false;

    public user: User = {
        userid: '',
        email: '',
        password: ''
    };

    public get togglePasswordVisibility() {
      return this.showPassword ? 'visibility_off' : 'visibility';
  }

  public onSubmit() {
      console.log(this.user);
      this.registrationForm.reset();
  }


}
