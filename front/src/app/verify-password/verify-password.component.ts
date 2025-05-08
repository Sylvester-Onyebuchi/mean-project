import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-password',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './verify-password.component.html',
  styleUrl: './verify-password.component.scss'
})
export class VerifyPasswordComponent {
  codeForm: FormGroup

  constructor(private fb: FormBuilder, private router:Router, private http: HttpClient){
    this.codeForm = this.fb.group({
      code : ['', Validators.required],
    })
  }

  onVerify(){
    const data = this.codeForm.value
    this.http.post('http://localhost:3000/api/auth/verify-email', data).subscribe(res => {
      this.router.navigateByUrl('home')
    })
  }
}
