import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  standalone:true,
  imports: [ ReactiveFormsModule, CommonModule, RouterModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
 registerForm = {
  name : '',
  email: '',
  password:''
 };

  constructor( private router:Router, private userService: UserService){}

  onSignup() {
    if (this.registerForm == null) {
      console.log("Form is invalid");
    }
  
    const data = this.registerForm;
    this.userService.signup(data).subscribe({
      next: res => {
        console.log("Successfully registered", res);
        this.router.navigateByUrl('verify');
      },
      error: err => {
        console.error('Registration error:', err);
      }
    });
  
    console.log("Form submitted"); 
    console.log(this.registerForm);
  }
  
  onBack(){
    this.router.navigateByUrl('login')
  }
}
