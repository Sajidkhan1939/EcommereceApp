import { Component } from '@angular/core';
import { FormControl ,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
 Registerform= new FormGroup({
  username:new FormControl('',{validators:[Validators.required,Validators.minLength(5),Validators.maxLength(8)]}),
  email:new FormControl('',{validators:[Validators.required,Validators.email]}),
  phone:new FormControl('',{validators:[Validators.required,Validators.pattern(/^\d{10}$/)]}),
  password:new FormControl('',{validators:[Validators.required,Validators.minLength(5)]})
 });

 onSubmit(){
  console.log(this.Registerform.value);
 }
}
