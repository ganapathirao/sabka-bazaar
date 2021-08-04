import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login.component";

// login page routes
const routes : Routes = [
    {
        path :'',
        component : LoginComponent
    }
]

@NgModule({
    imports : [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations : [
        LoginComponent
    ]
})

export class LoginModule {}