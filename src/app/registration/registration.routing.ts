import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { PersonComponent } from './person/person.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
    {
        path: 'registration', component: RegistrationComponent,
        children: [
            { path: 'person', component: PersonComponent },
            { path: 'company', component: CompanyComponent }
        ]
    },
    { path: 'login', component: LoginComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegistrationRouting { }