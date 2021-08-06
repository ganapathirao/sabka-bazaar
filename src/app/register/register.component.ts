import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  Validators 
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  // public variables
  public registerForm : FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.registerForm = this.fb.group({
      firstName : ['',[Validators.required]],
      lastName : ['',[Validators.required]],
      email : ['',[Validators.required, Validators.email]],
      password : ['',[Validators.required]],
      cnfPassword : ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  // function to signup user and redirect to home page
  signup(): void {
    if(this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    this.router.navigate(['/home']);
  }

}
