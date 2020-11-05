import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRouting } from './registration.routing';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [CompanyComponent, PersonComponent, RegistrationComponent, LoginComponent],
  imports: [
    CommonModule,
    RegistrationRouting
  ]
})
export class RegistrationModule { }
