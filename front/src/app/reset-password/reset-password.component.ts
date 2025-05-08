import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  imports: [FormsModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent implements OnInit {
  token: string = '';
  resetForm : FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router:Router, 
    private http: HttpClient,
    private route: ActivatedRoute){

    this.resetForm = this.fb.group({
      password: ['',[ Validators.required, Validators.minLength(6)]]
    })
  }
  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token')!;
    console.log(this.token)
  }

  onSubmit(){
    console.log(this.resetForm.value)
    const data = this.resetForm.value
    this.http.post(`http://localhost:3000/api/auth/reset-password/${this.token}`,data).subscribe({
      next:()=>{
        console.log("Success")
        this.router.navigateByUrl('login')
      },
      error:(err)=>{
        console.log(err)
        alert("Invalid credentials")
      }
    })
  }
 
}
