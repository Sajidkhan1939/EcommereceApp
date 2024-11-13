import { Routes } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { RegisterComponent } from './User/register/register.component';
import { MaincontentModule } from './maincontent/maincontent.module';

export const routes: Routes = [
  { path: '', component:LoginComponent },
  {path:'login', component:LoginComponent},
  { path: 'register', component:RegisterComponent },
  {path:'maincomponent', component:MaincontentModule}
];
