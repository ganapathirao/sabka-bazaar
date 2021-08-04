import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { RegisterComponent } from "./register.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

// register page routes
const routes : Routes = [
    {
        path :'',
        component : RegisterComponent
    }
]

@NgModule({
    imports : [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(routes)
    ],
    declarations : [
        RegisterComponent
    ]
})

export class RegisterModule {}