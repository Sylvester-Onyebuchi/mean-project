import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  forgotForm : FormGroup
  constructor(private fb: FormBuilder,private http: HttpClient, private router: Router) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    })
   }

   
  forgotPassword(){
    const data = this.forgotForm.value
    this.http.post('http://localhost:3000/api/auth/forgot-password', data).subscribe({
      next: () => {
        console.log("Password reset link sent to your email")
         this.router.navigateByUrl('login')
      }
    })
  }
}
