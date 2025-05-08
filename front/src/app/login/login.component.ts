import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder, private router:Router, private http: HttpClient){
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  onSubmit(){
    const data = this.loginForm.value
    this.http.post('http://localhost:3000/api/auth/login',data).subscribe({
      next:()=>{
        console.log("Success")
        this.router.navigateByUrl('home')
      },
      error:(err)=>{
        console.log(err)
        alert("Invalid credentials")
      }
    })
  }
  onBackToSignup(){
    this.router.navigateByUrl('signup')
  }
}
