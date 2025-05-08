import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front';
   currentRoute: string = '';
  constructor(private router: Router, private http:HttpClient) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
        console.log('Current Route:', this.currentRoute); 
      }
    });
  }
  navigateTo(path: string) {
    this.router.navigate([`/${path}`]);
  }

  logout(){
    this.http.post('http://localhost:3000/api/auth/logout', {withCredentials:true}).subscribe({
      next: () => {
        console.log("Logged out successfully")
        this.router.navigateByUrl('login')
      }
    })
  }
  forgotPassword(){
    this.http.post('http://localhost:3000/api/auth/forgot-password', {withCredentials:true}).subscribe({
      next: () => {
        console.log("Password reset link sent to your email")
        this.router.navigateByUrl('login')
      }
    })
  }

}
