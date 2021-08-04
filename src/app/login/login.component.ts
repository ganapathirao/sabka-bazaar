import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // public variables
  public loginForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
    ) { 
    this.loginForm = this.fb.group({
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  // function to check if login form is valid or not
  login(): void {
    if(this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/home']);
  }


}
