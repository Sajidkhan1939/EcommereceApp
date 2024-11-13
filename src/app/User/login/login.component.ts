import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormControl ,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Password } from 'primeng/password';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  login = new  FormGroup({
    username: new FormControl('',{validators:[Validators.required,Validators.minLength(5),Validators.maxLength(8)]}),
    password:new FormControl('',{validators:[Validators.required,Validators.minLength(5)]})
  });
  onSubmit(){
    console.log(this.login.value);
  }
}
