import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  submitted = false;
  loading = false;
  loginForm: FormGroup = this.formBuilder.group({
      username : ['',Validators.required],
      password : ['',Validators.required]
  })
  registerForm: FormGroup = this.formBuilder.group({
    username : ['',Validators.required],
    email : ['',Validators.required],
    password : ['',Validators.required]
})

  constructor(private formBuilder: FormBuilder,private userService:UserService) {}

  ngOnInit(): void {}

  get l(){return this.loginForm.controls;}
  get r(){return this.registerForm.controls;}

  onLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.loginService({"name":"balayya"}).subscribe( res => {
      console.log(res);
    });
    
    
  }

  onRegister() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    console.log(this.r);
    
  }

}
